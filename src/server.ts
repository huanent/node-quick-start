import Koa from "koa";
import router from "./router";
import requireAll from "require-all";

requireAll(__dirname + "/controllers");

const app = new Koa();
app.use(router.routes());
app.use(router.allowedMethods());

console.log("listening on http://localhost:3000");
app.listen(3000);
