import mongoose, { Schema } from "mongoose";
import { User } from "../User";
import { Group } from "../Group";

export interface Single {
  playerId: User;
  groupId: Group;
}

export interface SingleModel extends Single, Document {}

const singleSchema = new mongoose.Schema<Single>({
  groupId: { type: Schema.Types.ObjectId, required: true, ref: "Group" },
  playerId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
});

export default mongoose.model<SingleModel>("Single", singleSchema);
