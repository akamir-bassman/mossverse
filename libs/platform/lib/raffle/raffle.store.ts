import * as fetch from "../fetch";
import { Get, SetGet, Slice, createActions, createSlicer, createState } from "@util/client";
import type { RootState } from "../store";

// ? Store는 다른 store 내 상태와 상호작용을 정의합니다. 재사용성이 필요하지 않은 단일 기능을 구현할 때 사용합니다.
// * 1. State에 대한 내용을 정의하세요.
const state = (setget) => ({
  ...createState(fetch.raffleGraphQL),
});

// * 2. Action을 내용을 정의하세요. Action은 모두 void 함수여야 합니다.
// * 다른 action을 참조 시 get() as <Model>State 또는 RootState 를 사용하세요.
const actions = ({ set, get, pick }: SetGet<typeof state>) => ({
  ...createActions(fetch.raffleGraphQL, { set, get, pick }),
  //
  requestRaffle: async () => {
    const { raffle, refreshRaffle, queryOfRaffle, initMoneyAndItems } = get() as RootState;
    if (raffle === "loading") return;
    const priceTag = await fetch.purifyPriceTag(raffle.priceTags[0]);
    if (!priceTag) throw new Error("priceTag is not found");
    await fetch.raffle(raffle.id, priceTag);
    await initMoneyAndItems();
    await refreshRaffle({ query: queryOfRaffle });
    set({ raffleModal: null });
  },
});

export type RaffleState = Get<typeof state, typeof actions>;
export type RaffleSlice = Slice<"raffle", RaffleState>;
export const makeRaffleSlice = createSlicer("raffle" as const, state, actions);