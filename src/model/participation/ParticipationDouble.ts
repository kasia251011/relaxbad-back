import { Participation } from '../common';
import { Double } from '../record/Double';
import mongoose, { Schema } from 'mongoose';

export interface ParticipationDouble extends Participation {
  pairId1: Double;
  pairId2: Double;
}

export interface ParticipationDoubleModel extends ParticipationDouble, Document {};

const participationDoubleSchema = new mongoose.Schema<ParticipationDouble>({
  pairId1: { type: Schema.Types.ObjectId, required: true, ref: 'Double' },
  pairId2: { type: Schema.Types.ObjectId, required: true, ref: 'Double' },
})

export default mongoose.model<ParticipationDoubleModel>('ParticipationDouble', participationDoubleSchema);