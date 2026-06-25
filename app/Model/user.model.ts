import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
  fullName: string;
  role: 'user' | 'admin' | 'guide';
  isActive: boolean;
  isVerified: boolean;
  emailVerifiedAt?: Date;
  phoneNumber?: string;
  profileImage?: string;
  preferences: {
    newsletter: boolean;
    language: string;
    currency: string;
  };
  bookings: Array<{
    tourId: string;
    bookingDate: Date;
    status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
    participants: number;
    totalPrice: number;
  }>;
  resetPasswordToken?: string;
  resetPasswordExpires?: Date;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin', 'guide'],
      default: 'user',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    emailVerifiedAt: {
      type: Date,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    profileImage: {
      type: String,
    },
    preferences: {
      newsletter: {
        type: Boolean,
        default: false,
      },
      language: {
        type: String,
        default: 'en',
      },
      currency: {
        type: String,
        default: 'USD',
      },
    },
    bookings: [
      {
        tourId: {
          type: String,
          required: true,
        },
        bookingDate: {
          type: Date,
          default: Date.now,
        },
        status: {
          type: String,
          enum: ['pending', 'confirmed', 'cancelled', 'completed'],
          default: 'pending',
        },
        participants: {
          type: Number,
          required: true,
          min: 1,
        },
        totalPrice: {
          type: Number,
          required: true,
        },
      },
    ],
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
    lastLogin: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
UserSchema.index({ email: 1 });
UserSchema.index({ role: 1 });
UserSchema.index({ isActive: 1 });

// Method to check if user is admin
UserSchema.methods.isAdmin = function(): boolean {
  return this.role === 'admin';
};

// Method to check if user is guide
UserSchema.methods.isGuide = function(): boolean {
  return this.role === 'guide';
};

export const User = mongoose.model<IUser>('User', UserSchema);