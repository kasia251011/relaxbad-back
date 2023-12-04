import mongoose, { Schema } from "mongoose";
import { Double } from "./record/Double";
import { Single } from "./record/Single";
import { Gender, Role } from "./common";

export interface User {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: Gender;
  email: string;
  role: Role[];
  singleId?: Single;
  doubleId?: Double;
  mixId?: Double;
}

export interface UserModel extends User, Document {}

const userSchema = new mongoose.Schema<User>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  gender: { type: String, required: true },
  role: { type: [String], required: true },
  singleId: { type: Schema.Types.ObjectId, required: false, ref: "Single" },
  doubleId: { type: Schema.Types.ObjectId, required: false, ref: "Double" },
  mixId: { type: Schema.Types.ObjectId, required: false, ref: "Mix" },
});

export default mongoose.model<UserModel>("User", userSchema);
