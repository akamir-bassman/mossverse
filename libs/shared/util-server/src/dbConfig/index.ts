import { Types, FilterQuery, Schema } from "mongoose";
import * as DataLoader from "dataloader";
export type Id = Types.ObjectId;
export const Id = Types.ObjectId;
export const ObjectId = Schema.Types.ObjectId;
export { FilterQuery as Query };
export { DataLoader };
export * from "./defaultSchemaOptions";
export * as validate from "./validate";
export * from "./documentOptions";
export * from "./modelOptions";
export * from "./dataLoader";