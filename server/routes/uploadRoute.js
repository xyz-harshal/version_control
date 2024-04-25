import { uploadImage, uploadText } from "../controllers/uploadController.js";
import { Router } from "express";
import upload from "../middleware/multer.js";

const router = Router();

router.post("/image", upload.single("Image"), uploadImage);
router.post("/text", upload.single("Text"), uploadText);

export default router;
