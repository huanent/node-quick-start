import mongoose from "mongoose";
import settings from "./settings";

const conn = mongoose.createConnection(settings.connectionString, {
  authSource: "admin",
  useNewUrlParser: true
});

export default conn;
