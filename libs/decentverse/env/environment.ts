import type { ModulesOptions } from "../lib/option";
// eslint-disable-next-line @typescript-eslint/no-var-requires
export const environment = require(`./environment.${
  process.env["SERVER_ENV"] === "testing" ? "testing" : "testing.local"
}.ts`).environment as ModulesOptions;
