import express from "express";
import { createGood, deleteGood, getGood, updateGood } from "../controllers/good.js";

import { verifyAdmin } from "../utils/verifyToken.js";
const router= express.Router();

//CREATE
router.post("/:cargoid",createGood);
//UPDATE
router.put("/:id",updateGood);
//DELETE
router.delete("/:id/:cargoid", deleteGood);
//GET
router.get("/:id", getGood);
//GETALL

export default router;