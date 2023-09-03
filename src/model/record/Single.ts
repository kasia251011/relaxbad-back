import mongoose, { Schema } from 'mongoose';
import { Gender } from '../common';
import { Player } from 'model/Player';
import { Group } from 'model/Group';

export interface Single {
  playerId: Player;
  groupId: Group;
}

export interface SingleModel extends Single, Document {};

const singleSchema = new mongoose.Schema<Single>({
  groupId: { type: Schema.Types.ObjectId, required: true, ref: 'Group' },
  playerId: { type: Schema.Types.ObjectId, required: true, ref: 'Player' },
})

export default mongoose.model<SingleModel>('Single', singleSchema);