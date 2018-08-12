import mongoose from "mongoose";

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/beach");

const beachSchema = new mongoose.Schema({
  name: {
    type: String
  },
  long: {
    type: Number
  },
  lat: {
    type: Number
  }
});

const Beach = mongoose.model("beach", beachSchema);

export { Beach };
