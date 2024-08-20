import express from "express";
import Cargo from "../models/Cargo.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import { createCargo, deleteCargo, getCargo, updateCargo } from "../controllers/cargo.js";
const router= express.Router();

//CREATE
router.post("/",createCargo);
//UPDATE
router.put("/:id",updateCargo);
//DELETE
router.delete("/:id", deleteCargo);
//GET
router.get("/find/:id", getCargo);
//GETALL


export default router;