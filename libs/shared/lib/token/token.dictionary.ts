import { Token, TokenSummary } from "./token.fetch";
import { Translate, baseTrans } from "@util/client";

export const tokenTrans = {
  ...baseTrans,
  root: ["Root", "루트"],
  rootType: ["RootType", "루트 타입"],
  contract: ["Contract", "컨트랙트"],
  tokenId: ["TokenId", "토큰아이디"],
  purpose: ["Purpose", "목적"],
  lockUntil: ["LockUntil", "잠금해제일시"],
  uri: ["Uri", "Uri"],
  meta: ["Meta", "메타데이터"],
  image: ["Image", "이미지"],
  isLocked: ["IsLocked", "잠금여부"],
  totalToken: ["Total Token", "총 토큰수"],
} satisfies Translate<Token & TokenSummary>;
