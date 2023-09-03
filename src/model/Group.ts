import mongoose from 'mongoose';
import { Gender, GroupType } from './common';

export interface Group {
  type: GroupType;
  category: string;
  gender?: Gender;
}

export interface GroupModel extends Group, Document {};

const groupSchema = new mongoose.Schema<Group>({
  type: { type: String, required: true },
  category: { type: String, required: true },
  gender: {type: String, required: false}
});

export default mongoose.model<GroupModel>('Group', groupSchema);