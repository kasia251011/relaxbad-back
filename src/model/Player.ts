import mongoose, { Schema } from 'mongoose';
import { Double } from './record/Double';
import { Single } from './record/Single';

export interface Player {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  singleId?: Single;
  doubleId?: Double;
  mixId?: Double;
}

export interface PlayerModel extends Player, Document {};

const playerSchema = new mongoose.Schema<Player>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: {type: String, required: true},
  singleId: { type: Schema.Types.ObjectId, required: false, ref: 'Single' },
  doubleId: { type: Schema.Types.ObjectId, required: false, ref: 'Double' },
  mixId: { type: Schema.Types.ObjectId, required: false, ref: 'Mix' }
})

export default mongoose.model<PlayerModel>('Player', playerSchema);