import mongoose, { Schema, Document } from 'mongoose';

export interface IDestination extends Document {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  images: string[];
  coverImage: string;
  type: 'cultural' | 'historical' | 'nature' | 'adventure';
  tag?: string;
  highlights: string[];
  featured: boolean;
  coordinates: {
    lat: number;
    lng: number;
    city: string;
    region: string;
  };
  bestTimeToVisit: string;
  howToGetThere: string;
  accommodation: string;
  nearbyAttractions: string[];
  travelTips: string[];
  localCuisine: string;
  events: string[];
  itinerary: Array<{
    day: number;
    title: string;
    description: string;
    activities: string[];
    accommodation: string;
    meals: string[];
  }>;
  createdAt: Date;
  updatedAt: Date;
}

const DestinationSchema = new Schema<IDestination>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    shortDescription: { type: String, required: true },
    images: [{ type: String }],
    coverImage: { type: String },
    type: {
      type: String,
      enum: ['cultural', 'historical', 'nature', 'adventure'],
      required: true,
    },
    tag: { type: String },
    highlights: [{ type: String }],
    featured: { type: Boolean, default: false },
    coordinates: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
      city: { type: String, required: true },
      region: { type: String, required: true },
    },
    bestTimeToVisit: { type: String },
    howToGetThere: { type: String },
    accommodation: { type: String },
    nearbyAttractions: [{ type: String }],
    travelTips: [{ type: String }],
    localCuisine: { type: String },
    events: [{ type: String }],
    itinerary: [
      {
        day: { type: Number, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        activities: [{ type: String }],
        accommodation: { type: String },
        meals: [{ type: String }],
      },
    ],
  },
  {
    timestamps: true,
  }
);

DestinationSchema.index({ slug: 1 });
DestinationSchema.index({ type: 1 });
DestinationSchema.index({ featured: 1 });
DestinationSchema.index({ 'coordinates.region': 1 });

export const Destination = mongoose.model<IDestination>('Destination', DestinationSchema);