import { Prop, Schema } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
import { User } from "../user/user.schema";

@Schema({
  timestamps: true,
})
export class AuthToken extends Document {
  @Prop({ required: true, ref: "user", type: Types.ObjectId })
  user: User;

  @Prop({ type: Date })
  expiresAt: Date;
}
