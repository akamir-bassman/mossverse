import { BaseField, Id, ObjectId } from "@util/server";
import { Field, Float, ID, InputType, Int, IntersectionType, ObjectType } from "@nestjs/graphql";
import { Map } from "../map/map.constant";
import { Prop, Schema } from "@nestjs/mongoose";
import { cnst } from "@util/server";

// * 1. 보안필드를 제외한 모든 필드
@ObjectType({ isAbstract: true })
@InputType({ isAbstract: true })
@Schema()
class Base {
  @Field(() => Map)
  @Prop({ type: ObjectId, required: true, ref: "map" })
  map: Id;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  message?: string;

  @Field(() => String, { nullable: true })
  @Prop({ type: String, required: false })
  errorMessage?: string;

  @Field(() => [Float])
  @Prop([Number])
  center: number[];

  @Field(() => [Float])
  @Prop([Number])
  wh: number[];

  @Field(() => Int)
  @Prop({ type: Number, required: true, default: 100 })
  maxNum: number;

  @Field(() => String)
  @Prop({ type: String, default: "call", enum: cnst.roomTypes })
  roomType: cnst.RoomType;
}

// * 2. 다른 필드를 참조하는 값 Input형식으로 덮어씌우기
@InputType({ isAbstract: true })
class InputOverwrite {
  @Field(() => ID)
  map: Id;
}

// * 3. 보안필드, default 필드 생성 필수
@ObjectType({ isAbstract: true })
@InputType({ isAbstract: true })
@Schema()
class Tail extends Base {
  @Field(() => String)
  @Prop({
    type: String,
    enum: cnst.callRoomStatuses,
    required: true,
    default: "active",
  })
  status: cnst.CallRoomStatus;
}

// * 최종 생성 모델
@InputType()
export class CallRoomInput extends IntersectionType(InputOverwrite, Base, InputType) {}
@ObjectType()
export class CallRoom extends IntersectionType(BaseField(Base), Tail) {}
@Schema()
export class CallRoomSchema extends Tail {}

// * 4. 데이터 모니터링을 위한 Summary 모델
@ObjectType({ isAbstract: true })
@Schema()
export class CallRoomSummary {
  @Field(() => Int)
  @Prop({ type: Number, required: true, min: 0, default: 0 })
  totalCallRoom: number;
}
