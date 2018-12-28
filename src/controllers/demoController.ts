import router from "../router";
import demo from "../models/demo";

router
  .get("/demo", async (ctx, next) => {
    var q = await demo.find();
    ctx.body = q;
  })
  .post("/demo", async ctx => {
    var instance = new demo(ctx.request.body);
    await instance.save();
    ctx.status = 200;
  })
  .put("/demo/:id", async ctx => {
    await demo.findByIdAndUpdate(ctx.params.id, ctx.request.body);
    ctx.status = 200;
  })
  .delete("/demo/:id", async ctx => {
    await demo.findByIdAndDelete(ctx.params.id);
    ctx.status = 200;
  });
