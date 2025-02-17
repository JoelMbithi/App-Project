import multer from 'multer';
import path from 'path';

// Define the storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        // Save files to the 'uploads' directory
        callback(null, path.join(process.cwd(), 'uploads'));
    },
    filename: function (req, file, callback) {
        // Use the original file name
        callback(null, file.originalname);
    }
});

// Define file filter to accept only images
const fileFilter = (req, file, callback) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedTypes.includes(file.mimetype)) {
        callback(null, true); // Accept the file
    } else {
        callback(new Error('Invalid file type. Only JPEG, PNG, and JPG files are allowed.'), false);
    }
};

// Configure Multer
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024, // Limit file size to 5MB
    }
});

export default upload;