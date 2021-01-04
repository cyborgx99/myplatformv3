import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log(`Mongo Connected ${connection.connection.host}`);
  } catch (err) {
    console.log('MongoError:', err.message);
    process.exit(1);
  }
};

export default connectDb;
