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

  @Field(() => [Float])
  @Prop([Number])
  center: number[];

  @Field(() => [Float])
  @Prop([Number])
  wh: number[];
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
    enum: cnst.collisionStatuses,
    required: true,
    default: "active",
  })
  status: cnst.CollisionStatus;
}

// * 최종 생성 모델
@InputType()
export class CollisionInput extends IntersectionType(InputOverwrite, Base, InputType) {}
@ObjectType()
export class Collision extends IntersectionType(BaseField(Base), Tail) {}
@Schema()
export class CollisionSchema extends Tail {}

// * 4. 데이터 모니터링을 위한 Summary 모델
@ObjectType({ isAbstract: true })
@Schema()
export class CollisionSummary {
  @Field(() => Int)
  @Prop({ type: Number, required: true, min: 0, default: 0 })
  totalCollision: number;
}
