const mongoose=require('mongoose');
const productSchema= new mongoose.Schema({
    name:String,
    quantity: Number,
    price:Number,
    image: String
})

module.exports=mongoose.model('product',productSchema);