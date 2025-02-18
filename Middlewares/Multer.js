import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: (req, file, callback) => callback(null, path.join(process.cwd(), 'uploads')),
  filename: (req, file, callback) => callback(null, file.originalname)
});

const fileFilter = (req, file, callback) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
  callback(null, allowedTypes.includes(file.mimetype));
};

const upload = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } });

export default upload;