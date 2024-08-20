import mongoose from "mongoose";
const GoodSchema = new mongoose.Schema(
    {
    title:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    maxWeight:{
      type:String,
      required:true
  },
    desc:{
        type:String,
        required:true
    },
    goodNumbers: [{number:Number, unavailableDates:{type: [Date]}}],
  },
    {timestamps:true}
);
export default mongoose.model("Good", GoodSchema);