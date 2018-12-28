import router from "../router";

router.get("/user", async (ctx, next) => {
  ctx.body = "jobs";
  await next();
});
