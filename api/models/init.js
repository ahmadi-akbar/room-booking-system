import mongoose from "mongoose";
require("dotenv").config();
mongoose.Promise = global.Promise;

var mongoConf = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose
  .connect(process.env.MONGO_URI, mongoConf)
  .then(() => console.log("Successfully connected to database"))
  .catch(error => console.error("Error connecting to MongoDB database", error));

export default mongoose;
