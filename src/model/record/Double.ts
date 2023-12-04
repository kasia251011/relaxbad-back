import mongoose, { Schema } from "mongoose";
import { User } from "../User";
import { Group } from "../Group";

export interface Double {
  groupId: Group;
  playerId1: User;
  playerId2: User;
}

export interface DoubleModel extends Double, Document {}

const doubleSchema = new mongoose.Schema<Double>({
  groupId: { type: Schema.Types.ObjectId, required: true, ref: "Group" },
  playerId1: { type: Schema.Types.ObjectId, required: true, ref: "User" },
  playerId2: { type: Schema.Types.ObjectId, required: true, ref: "User" },
});

export default mongoose.model<DoubleModel>("Double", doubleSchema);
