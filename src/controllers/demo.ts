import router from '../router'
import { Context } from 'koa';

router.get("/",(ctx:Context)=>{
    ctx.body="home23"
})