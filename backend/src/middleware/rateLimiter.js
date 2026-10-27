import ratelimit from "../config/upstash.js";

const rateLimiter = async(req,res,next)=>{
    try {
        const {success} = await ratelimit.limit("my-key-limit");
        if(!success){
            return res.status(429).json({message:"Too many request!... please try again alter"});
            
        }
        next();
    } catch (error) {
        console.error("Error in rateLimiter : ",error);
        next(error);
    }
}
export default rateLimiter;