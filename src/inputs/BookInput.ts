import { Field, InputType } from "type-graphql";

@InputType()
export class CreateBookInput {
  @Field()
  title: string;
}

@InputType()
export class UpdateBookInput extends CreateBookInput {}
