import type { ModulesOptions } from "../lib/option";
// eslint-disable-next-line @typescript-eslint/no-var-requires
export const environment = require(`./environment.${process.env["SERVER_ENV"]}.ts`).environment as ModulesOptions;
