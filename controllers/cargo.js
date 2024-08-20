import Cargo from "../models/Cargo.js";

export const createCargo = async (req,res,next) =>{
   const newCargo = new Cargo(req.body);
try{
      const savedCargo= await newCargo.save();
      res.status(200).json(savedCargo);
}catch(err)
{
   next(err);
}
};
export const updateCargo = async (req,res,next) =>{
   
    try{
        const updatedCargo= await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body} , { new : true});
        res.status(200).json(updatedCargo);
  }catch(err)
{
   next(err);
}
}
export const deleteCargo = async (req,res,next) =>{
    try{
        await Cargo.findByIdAndDelete(req.params.id);
         res.status(200).json("Cargo has been deleted");
   }catch(err)
{
   next(err);
}
}
export const getCargo = async (req,res,next) =>{
    try{
        const cargo= await Cargo.findById(req.params.id);
        res.status(200).json(cargo);
  }catch(err)
{
   next(err);
}
}
export const getCargos = async (req,res,next) =>{
    try{
        const cargos= await Cargo.find();
        res.status(200).json(cargos);
  }catch(err)
{
   next(err);
}
}
