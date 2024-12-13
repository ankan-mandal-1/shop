import multer from "multer"

const storage = multer.memoryStorage();

const maxSize = 4 * 1000 * 1000;

const upload = multer({ storage, limits: { fileSize: maxSize /* bytes */ } })

export default upload;