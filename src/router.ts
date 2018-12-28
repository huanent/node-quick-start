import Router from "koa-router";
import requireAll from "require-all";
import path from "path";

const router = new Router({ prefix: "/api" });
export default router;

var ctrlPaths = path.join(__dirname, "controllers");
requireAll(ctrlPaths);

