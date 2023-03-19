import { module as shared } from "@shared/module";
import { ModulesOptions } from "./option";
import { SurveyModule } from "./survey/survey.module";
import { ListingModule } from "./listing/listing.module";
import { ReceiptModule } from "./receipt/receipt.module";
import { ScalarModule } from "./_scalar/scalar.module";
import { TradeModule } from "./trade/trade.module";
import { PlatBatchModule } from "./platBatch/platBatch.module";
import { DynamicModule } from "@nestjs/common";
import { UserModule } from "./user/user.module";
export const registerModules = (options: ModulesOptions, isChild?: boolean) => {
  const modules = [
    ...(!isChild ? shared.registerModules(options, true) : []),
    ScalarModule,
    SurveyModule,
    ReceiptModule,
    ListingModule,
    TradeModule,
    UserModule.register(!isChild),
  ].filter((module) => !!module) as DynamicModule[];
  return modules;
};
export const registerBatches = (options: ModulesOptions, isChild?: boolean) => {
  const modules = [
    PlatBatchModule as unknown as DynamicModule,
    //
  ].filter((module) => !!module) as DynamicModule[];
  return modules;
};