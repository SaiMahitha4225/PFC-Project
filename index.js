import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js";
import cargosRoute from "./routes/cargos.js";
import usersRoute from "./routes/users.js";
import goodsRoute from "./routes/goods.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app= express()
dotenv.config()

const connect = async ()=>{
try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb")
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", ()=>{
    console.log("mongodb disconnected");
})

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json());


app.use("/api/auth",authRoute);
app.use("/api/cargos",cargosRoute);
app.use("/api/users",usersRoute);
app.use("/api/goods",goodsRoute);

app.use((err,req,res,next)=>{
  const errorStatus= err.status || 500
  const errorMessage= err.message || "something went wrong"
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack:err.stack,
  });
});


app.listen(8000, ()=> {
    connect();
    console.log("connected to backend.");
});