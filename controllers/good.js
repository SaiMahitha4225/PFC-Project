import Good from "../models/Good.js";
import Cargo from "../models/Cargo.js";


export const createGood = async (req, res, next) => {
    const cargoId = req.params.cargoid;
    const newGood = new Good(req.body);
  
    try {
      const savedGood = await newGood.save();
      try {
        await Good.findByIdAndUpdate(cargoId, {
          $push: { goods: savedGood._id },
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json(savedGood);
    } catch (err) {
      next(err);
    }
  };

export const updateGood = async (req,res,next) =>{
   
    try{
        const updatedGood= await Good.findByIdAndUpdate(req.params.id, { $set: req.body} , { new : true});
        res.status(200).json(updatedGood);
  }catch(err)
{
   next(err);
}
};

export const deleteGood = async (req,res,next) =>{
  const cargoId = req.params.cargoid;
    try{
        await Good.findByIdAndDelete(req.params.id);
        try {
          await Good.findByIdAndUpdate(cargoId, {
            $pull: { goods: req.params.id },
          });
        } catch (err) {
          next(err);
        }
         res.status(200).json("Goods has been deleted");
   }catch(err)
{
   next(err);
}
};

export const getGood = async (req,res,next) =>{
    try{
        const good= await Good.findById(req.params.id);
        res.status(200).json(good);
  }catch(err)
{
   next(err);
}
};

export const getGoods = async (req,res,next) =>{
    try{
        const goods= await Good.find();
        res.status(200).json(goods);
  }catch(err)
{
   next(err);
}
};