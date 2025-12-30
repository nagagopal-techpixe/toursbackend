import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nagagopalchimata566_db_user:ek51dcOsE23SXZqz@cluster0.tpviehp.mongodb.net/?appName=Cluster0"
    );
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("DB Connection Failed", err);
    process.exit(1);
  }
};

export default connectDB;
