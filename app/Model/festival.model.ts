import mongoose, { Schema, Document } from 'mongoose';

export interface IFestival extends Document {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  images: string[];
  coverImage: string;
  date: string;
  season: string;
  location: string;
  significance: string;
  highlights: string[];
  culturalTips: string[];
  featured: boolean;
  coordinates: {
    lat: number;
    lng: number;
    city: string;
    region: string;
  };
  bestTimeToVisit: string;
  duration: string;
  activities: string[];
  religiousSignificance: string;
  localCustoms: string[];
  whatToWear: string;
  photographyTips: string;
  accommodation: string;
  transportation: string;
  createdAt: Date;
  updatedAt: Date;
}

const FestivalSchema = new Schema<IFestival>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    shortDescription: { type: String, required: true },
    images: [{ type: String }],
    coverImage: { type: String },
    date: { type: String, required: true },
    season: { type: String, required: true },
    location: { type: String, required: true },
    significance: { type: String, required: true },
    highlights: [{ type: String }],
    culturalTips: [{ type: String }],
    featured: { type: Boolean, default: false },
    coordinates: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
      city: { type: String, required: true },
      region: { type: String, required: true },
    },
    bestTimeToVisit: { type: String },
    duration: { type: String },
    activities: [{ type: String }],
    religiousSignificance: { type: String },
    localCustoms: [{ type: String }],
    whatToWear: { type: String },
    photographyTips: { type: String },
    accommodation: { type: String },
    transportation: { type: String },
  },
  {
    timestamps: true,
  }
);

FestivalSchema.index({ slug: 1 });
FestivalSchema.index({ featured: 1 });
FestivalSchema.index({ date: 1 });
FestivalSchema.index({ 'coordinates.region': 1 });

export const Festival = mongoose.model<IFestival>('Festival', FestivalSchema);