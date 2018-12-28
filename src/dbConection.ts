import mongoose from "mongoose";

const conn = mongoose.createConnection(
  "mongodb://root:root@52.197.162.5/node_quick_start",
  {
    authSource: "admin"
  }
);

export default conn;
