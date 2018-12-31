import conn from "../conection";
import mongoose from "mongoose";

const demoSchema = new mongoose.Schema({
  name: String,
  pwd: String
});

export default conn.model("demo", demoSchema);