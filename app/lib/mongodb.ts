import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://surafelriseon_db_user:XF5q7DXSeO3jzNWH@ac-r0juqds-shard-00-00.hkhr1lh.mongodb.net:27017,ac-r0juqds-shard-00-01.hkhr1lh.mongodb.net:27017,ac-r0juqds-shard-00-02.hkhr1lh.mongodb.net:27017/?ssl=true&replicaSet=atlas-12p0js-shard-0&authSource=admin&appName=project'

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error);
  }
};
export default connectToDatabase;