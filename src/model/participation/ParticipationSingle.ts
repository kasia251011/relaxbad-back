import { Participation } from '../common';
import { Single } from '../record/Single';
import mongoose, { Schema } from 'mongoose';

export interface ParticipationSingle extends Participation {
  singleId1: Single;
  singleId2: Single;
}

export interface ParticipationSingleModel extends ParticipationSingle, Document {};

const participationSingleSchema = new mongoose.Schema<ParticipationSingle>({
  singleId1: { type: Schema.Types.ObjectId, required: true, ref: 'Single' },
  singleId2: { type: Schema.Types.ObjectId, required: true, ref: 'Single' },
})

export default mongoose.model<ParticipationSingleModel>('ParticipationSingle', participationSingleSchema);