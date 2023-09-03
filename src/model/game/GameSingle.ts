import { Game } from '../common';
import { ParticipationSingle } from '../participation/ParticipationSingle';
import mongoose, { Schema } from 'mongoose';

export interface GameSingle extends Game {
  participationId1: ParticipationSingle;
  participationId2: ParticipationSingle;
}

export interface GameSingleModel extends GameSingle, Document {};

const participationSingleSchema = new mongoose.Schema<GameSingle>({
  participationId1: { type: Schema.Types.ObjectId, required: true, ref: 'ParticipationSingle' },
  participationId2: { type: Schema.Types.ObjectId, required: true, ref: 'ParticipationSingle' },
})

export default mongoose.model<GameSingleModel>('GameSingle', participationSingleSchema);