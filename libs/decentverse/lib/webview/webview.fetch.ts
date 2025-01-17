import { BaseGql, Field, Float, InputType, Int, ObjectType, PickType, createGraphQL } from "@util/client";
import { Map } from "../map/map.fetch";
import { cnst } from "@util/client";

@InputType("WebviewInput")
export class WebviewInput {
  @Field(() => Map)
  map: Map;

  @Field(() => String, { nullable: true })
  message: string | null;

  @Field(() => String, { nullable: true })
  errorMessage: string | null;

  @Field(() => [Float])
  center: [number, number];

  @Field(() => [Float])
  wh: [number, number];

  @Field(() => String)
  url: string;

  @Field(() => [Int])
  size: [number, number];

  @Field(() => String)
  purpose: cnst.WebviewPurpose;

  @Field(() => Boolean)
  isEmbed: boolean;
}

@ObjectType("Webview", { _id: "id" })
export class Webview extends BaseGql(WebviewInput) {
  @Field(() => String)
  status: cnst.WebviewStatus;
}

@ObjectType("LightWebview", { _id: "id", gqlRef: "Webview" })
export class LightWebview extends PickType(Webview, [
  "message",
  "errorMessage",
  "center",
  "wh",
  "url",
  "size",
  "purpose",
  "isEmbed",
  "status",
] as const) {}

@ObjectType("WebviewSummary")
export class WebviewSummary {
  @Field(() => Int)
  totalWebview: number;
}

export const webviewQueryMap: { [key in keyof WebviewSummary]: any } = {
  totalWebview: { status: { $ne: "inactive" } },
};

export const webviewGraphQL = createGraphQL("webview" as const, Webview, WebviewInput, LightWebview);
export const {
  getWebview,
  listWebview,
  webviewCount,
  webviewExists,
  createWebview,
  updateWebview,
  removeWebview,
  webviewFragment,
  lightWebviewFragment,
  purifyWebview,
  crystalizeWebview,
  lightCrystalizeWebview,
  defaultWebview,
  mergeWebview,
  initWebview,
  viewWebview,
  editWebview,
} = webviewGraphQL;
