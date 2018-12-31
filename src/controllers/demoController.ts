import { router } from "../app";
import demo from "../models/demo";

router
  .get("/", async (ctx, next) => {
    var q = await demo.find();
    ctx.body = q;
  })
  .post("/", async ctx => {
    var instance = new demo(ctx.request.body);
    await instance.save();
    ctx.status = 200;
  })
  .put(":id", async ctx => {
    await demo.findByIdAndUpdate(ctx.params.id, ctx.request.body);
    ctx.status = 200;
  })
  .delete(":id", async ctx => {
    await demo.findByIdAndDelete(ctx.params.id);
    ctx.status = 200;
  });
