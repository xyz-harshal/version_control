import cloudinary from "../utils/Cloudinary.js";
import fs from "fs";

const uploadImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    res.json({
      message: "Image uploaded successfully",
      result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

const uploadText = (req, res) => {
  const reader = fs.createReadStream(req.file.path);
  reader.on("data", function (chunk) {
    console.log(chunk.toString());
  });
  res.json({ message: "text uploaded" });
};

export { uploadImage, uploadText };
