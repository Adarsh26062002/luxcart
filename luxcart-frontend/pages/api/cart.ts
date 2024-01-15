import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";


export default async function handle(req,res){
    await mongooseConnect();
    const ids = req.body.ids;

    try{
        const products = await Product.find({_id:{$in : ids}});
        res.status(200).json(products);
    }
    catch(error){
        console.log('Error',error);
        res.status(500).json({error:'Internal Server Error'});
    }
}