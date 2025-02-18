import express from "express";
import { addDoctor, LoginAdmin } from '../Controllers/AdminController.js';
import upload from "../Middlewares/Multer.js";
import AuthAdmin from "../Middlewares/AuthAdmin.js";

const adminRouter = express.Router();

// Create multiple endpoints
adminRouter.post('/add-doctor',AuthAdmin, upload.single('image'), addDoctor);
adminRouter.post("/login", LoginAdmin);

export default adminRouter;      