import Koa from "koa";
import router from "./router";
import staticFile from "koa-static";
const app = new Koa();

app.use(router.routes());
app.use(router.allowedMethods());
app.use(staticFile("public"));
console.log("listening on http://localhost:3000");
app.listen(3000);
