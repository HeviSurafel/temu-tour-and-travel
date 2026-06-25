import mongoose, { Schema, Document } from 'mongoose';

export interface ITour extends Document {
  id: string;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  images: string[];
  coverImage: string;
  duration: string;
  durationDays: number;
  durationNights: number;
  highlights: string[];
  tag?: string;
  category: 'historical' | 'cultural' | 'nature' | 'adventure' | 'omo-valley';
  difficulty: 'easy' | 'moderate' | 'challenging' | 'extreme';
  rating: number;
  reviewCount: number;
  featured: boolean;
  groupSize: {
    min: number;
    max: number;
  };
  coordinates: {
    lat: number;
    lng: number;
    city: string;
    region: string;
  };
  itinerary: Array<{
    day: number;
    title: string;
    description: string;
    activities: string[];
    accommodation: string;
    meals: string[];
  }>;
  inclusions: Array<{
    category: string;
    items: string[];
  }>;
  exclusions: string[];
  operator: string;
  pricing: {
    currency: string;
    adultPrice: number;
    childPrice: number;
    validFrom: Date;
    validUntil: Date;
  };
  availability: {
    status: 'active' | 'inactive' | 'upcoming';
    startDates: Date[];
    maxGroupSize: number;
    minGroupSize: number;
    guaranteedDeparture: boolean;
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
  bestTimeToVisit: string[];
  season: string;
  languages: string[];
  departurePoint: string;
  whatToBring: string[];
  culturalTips: string[];
  createdAt: Date;
  updatedAt: Date;
}

const TourSchema = new Schema<ITour>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    shortDescription: { type: String, required: true },
    images: [{ type: String }],
    coverImage: { type: String },
    duration: { type: String, required: true },
    durationDays: { type: Number, required: true },
    durationNights: { type: Number, required: true },
    highlights: [{ type: String }],
    tag: { type: String },
    category: {
      type: String,
      enum: ['historical', 'cultural', 'nature', 'adventure', 'omo-valley'],
      required: true,
    },
    difficulty: {
      type: String,
      enum: ['easy', 'moderate', 'challenging', 'extreme'],
      default: 'moderate',
    },
    rating: { type: Number, default: 4.5 },
    reviewCount: { type: Number, default: 0 },
    featured: { type: Boolean, default: false },
    groupSize: {
      min: { type: Number, default: 2 },
      max: { type: Number, default: 12 },
    },
    coordinates: {
      lat: { type: Number, required: true },
      lng: { type: Number, required: true },
      city: { type: String, required: true },
      region: { type: String, required: true },
    },
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
    inclusions: [
      {
        category: { type: String, required: true },
        items: [{ type: String }],
      },
    ],
    exclusions: [{ type: String }],
    operator: { type: String, default: 'Ethiopia Tours' },
    pricing: {
      currency: { type: String, default: 'USD' },
      adultPrice: { type: Number, required: true },
      childPrice: { type: Number, required: true },
      validFrom: { type: Date, default: Date.now },
      validUntil: { type: Date },
    },
    availability: {
      status: {
        type: String,
        enum: ['active', 'inactive', 'upcoming'],
        default: 'active',
      },
      startDates: [{ type: Date }],
      maxGroupSize: { type: Number },
      minGroupSize: { type: Number },
      guaranteedDeparture: { type: Boolean, default: true },
    },
    faq: [
      {
        question: { type: String, required: true },
        answer: { type: String, required: true },
      },
    ],
    bestTimeToVisit: [{ type: String }],
    season: { type: String },
    languages: [{ type: String }],
    departurePoint: { type: String },
    whatToBring: [{ type: String }],
    culturalTips: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

// Create indexes for better query performance
TourSchema.index({ slug: 1 });
TourSchema.index({ category: 1 });
TourSchema.index({ featured: 1 });
TourSchema.index({ 'coordinates.region': 1 });
TourSchema.index({ rating: -1 });

export const Tour = mongoose.model<ITour>('Tour', TourSchema);