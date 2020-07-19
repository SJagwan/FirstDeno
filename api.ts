import {Router} from "./depts.ts";
import * as planets from "./model/planet.ts"
import * as launches from './model/launches.ts';

const router=new Router();

router.get("/",(ctx)=>{
    ctx.response.body="Hello World"
})
router.get("/planets",(ctx)=>{
    ctx.response.body=planets.getAllPlanet();

})
router.get("/launches",(ctx)=>{
    ctx.response.body=launches.getAllLaunch();

})
router.get("/launches/:id",(ctx)=>{
    if(ctx.params?.id){
        const launchlist=launches.getOneLaunch(Number(ctx.params.id));
        if(launchlist){
            ctx.response.body=launchlist;
        }else{
            ctx.throw(400,"Launch with that id doesn't exist");
        }
    }
})
router.delete("/launches/:id",(ctx)=>{
    if(ctx.params?.id){
       const result= launches.removeOne(Number(ctx.params.id));
       ctx.response.body={success:result}
    }
})
router.post("/launches",async (ctx)=>{
    const body=await ctx.request.body();

    launches.addOne(body.value);
    ctx.response.body={success:true}
    ctx.response.status=201;
})
export default router;