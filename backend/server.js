const connectDb = require('./config/connexionDb');

const express=require('express');
const productRouter = require('./routes/products');
const app=express();
const port=5005;
const cors=require('cors');

connectDb();
app.use(cors())
app.use(express.json());
app.use('/api/product',productRouter)





app.listen(port,(err)=>{
    err?
    console.error('err')
    :
    console.log(`server port: ${port}`)

})


