const fs = require("fs");
const path = require("path");
const multer = require("multer");

const uploadDir2 = path.join(path.join("public", "uploads"));
const uploadDir = path.join("public", "uploads");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const originalName = file.originalname;
    const replaceSpace = originalName.replace(/\s+/g, "_");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}_${replaceSpace}`);
  },
});

module.exports = storage;
