import mongoose from 'mongoose';

const CargoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    distance:{
        type:String,
        required:true
        },
            desc:{
                type:String,
                required:true
                },
                    goods:{
                        type:[String],
                        },
                            featured:{
                                type:Boolean,
                                default:false
                                },
});
export default mongoose.model("Cargo", CargoSchema)