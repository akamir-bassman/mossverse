import { KeyringEmployee } from "./keyring.employee";
import { TestSystem } from "@shared/test-server";
import { environment } from "../env/environment";

import * as db from "../db";
import * as sample from "../sample";
import { registerModules } from "../server";
describe("Keyring Service", () => {
  const system = new TestSystem();
  let keyringEmployee: KeyringEmployee;
  let networkEmployee: emp.NetworkEmployee;
  let walletEmployee: emp.WalletEmployee;
  let network: db.Network.Doc;
  let testWallets: db.Wallet.Doc[];
  beforeAll(async () => {
    const app = await system.init(registerModules(environment));
    keyringEmployee = app.get<KeyringEmployee>(KeyringEmployee);
    networkEmployee = app.get<emp.NetworkEmployee>(emp.NetworkEmployee);
    walletEmployee = app.get<emp.WalletEmployee>(emp.WalletEmployee);
    network = await networkEmployee.create(sample.networkInput("klaytn"));
    testWallets = await Promise.all(
      environment.klaytn.testWallets.map(async (w) => await walletEmployee.myWallet(network._id, w.address))
    );
  });
  afterAll(async () => await system.terminate());
  let keyring: db.Keyring.Doc;
  let anotherKeyring: db.Keyring.Doc;
  it("Signin With Wallet", async () => {
    const { jwt } = await keyringEmployee.signinWallet(network._id, testWallets[0].address);
    expect(jwt).toBeDefined();
  });
  it("Add Wallet", async () => {
    [keyring] = await keyringEmployee.keyringsHasWallet(network._id, testWallets[0].address);
    expect(keyring).toBeDefined();
    expect(keyring.wallets.some((_id) => _id.equals(testWallets[0]._id))).toBeTruthy();
  });
  it("Add Wallet More", async () => {
    keyring = await keyringEmployee.signaddWallet(keyring._id, network._id, testWallets[1].address);
    expect(keyring.wallets.some((_id) => _id.equals(testWallets[0]._id))).toBeTruthy();
    expect(keyring.wallets.some((_id) => _id.equals(testWallets[1]._id))).toBeTruthy();
  });
  it("Not Duplicate Wallets", async () => {
    keyring = await keyringEmployee.signaddWallet(keyring._id, network._id, testWallets[1].address);
    expect(keyring.wallets.some((_id) => _id.equals(testWallets[0]._id))).toBeTruthy();
    expect(keyring.wallets.some((_id) => _id.equals(testWallets[1]._id))).toBeTruthy();
    expect(keyring.wallets.length).toEqual(2);
  });
  it("Migrate Wallet", async () => {
    const { jwt } = await keyringEmployee.signinWallet(network._id, testWallets[2].address);
    expect(jwt).toBeDefined();
    [anotherKeyring] = await keyringEmployee.keyringsHasWallet(network._id, testWallets[2].address);
    expect(anotherKeyring).toBeDefined();
    expect(anotherKeyring.wallets.some((_id) => _id.equals(testWallets[2]._id))).toBeTruthy();
    anotherKeyring = await keyringEmployee.signaddWallet(anotherKeyring._id, network._id, testWallets[1].address);
    await keyring.refresh();
    expect(keyring.wallets.some((_id) => _id.equals(testWallets[1]._id))).toBeFalsy();
    expect(keyring.wallets.some((_id) => _id.equals(testWallets[1]._id))).toBeFalsy();
  });
  it("Prevent Empty Wallets When Remove Wallet", async () => {
    await expect(
      keyringEmployee.signsubWallet(keyring._id, testWallets[0]._id, testWallets[0].address)
    ).rejects.toThrow();
  });
});
