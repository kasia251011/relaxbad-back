import mongoose, { Schema } from 'mongoose';
import { Gender } from '../common';
import { Player } from 'model/Player';
import { Group } from 'model/Group';

export interface Double {
  groupId: Group;
  playerId1: Player;
  playerId2: Player;
}

export interface DoubleModel extends Double, Document {};

const doubleSchema = new mongoose.Schema<Double>({
  groupId: { type: Schema.Types.ObjectId, required: true, ref: 'Group' },
  playerId1: { type: Schema.Types.ObjectId, required: true, ref: 'Player' },
  playerId2: { type: Schema.Types.ObjectId, required: true, ref: 'Player' }
})

export default mongoose.model<DoubleModel>('Double', doubleSchema);