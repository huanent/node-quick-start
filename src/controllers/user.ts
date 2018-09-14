import app from "../app";

app
  .route("/user")
  .get((req, rsp) => {
    rsp.send({
      name: "zhansan",
      age: 23
    });
  })
  .post((req, rsp) => {
    console.log(req.body)
  });