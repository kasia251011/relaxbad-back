import { Game } from '../common';
import { ParticipationDouble } from '../participation/ParticipationDouble';
import mongoose, { Schema } from 'mongoose';

export interface GameDouble extends Game {
  participationId1: ParticipationDouble;
  participationId2: ParticipationDouble;
}

export interface GameDoubleModel extends GameDouble, Document {};

const participationDoubleSchema = new mongoose.Schema<GameDouble>({
  participationId1: { type: Schema.Types.ObjectId, required: true, ref: 'ParticipationDouble' },
  participationId2: { type: Schema.Types.ObjectId, required: true, ref: 'ParticipationDouble' },
})

export default mongoose.model<GameDoubleModel>('GameDouble', participationDoubleSchema);