import { app, router } from "./app";
import staticFile from "koa-static";
import bodyParser from "koa-bodyparser";
import "./controllers/demoController";
import "./controllers/demo2Controller";

const port = 3000;

app.use(bodyParser());
app.use(staticFile("public"));
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port, () => {
  console.log(
    "App is running at http://localhost:%d in %s mode",
    port,
    app.env
  );
  console.log("Press CTRL-C to stop\n");
});
