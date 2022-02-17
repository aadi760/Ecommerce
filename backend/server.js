import  express from 'express';
import  dotenv from 'dotenv';
import  productRoutes from './routes/productRoutes.js'
import { notFound,errorHandler } from './Middleware/errorMiddleware.js';

import connectDB from './config/db.js'
dotenv.config();

connectDB();
const app=express();

 app.get('/',(req,res)=>{
     res.send("Api is running");

 })
  
 app.use('/api/products',productRoutes);
 app.use(notFound)
 app.use(errorHandler)
 
const PORT=process.env.PORT || 5000
app.listen(PORT,console.log(`server is running at ${process.env.NODE_ENV} mode at port ${PORT}`));