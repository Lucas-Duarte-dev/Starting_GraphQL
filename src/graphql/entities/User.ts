import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,

  active: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model("User", schema);
