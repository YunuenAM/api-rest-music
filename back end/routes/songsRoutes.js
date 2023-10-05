const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require ('fs');
const {getSongs, setSong, updateSong, deleteSong} = require('../controllers/songsControllers');
const {protect} = require('../middleware/authMiddleware')

//Configurate multer to update files

const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null, 'uploads/');
    },
    filename: (req,file,cb) => {
        const timestamp = Date.now();
        cb(null, `${timestamp}_${file.originalname}`);
    }
});
const upload = multer ({storage});

router.get('/', protect, getSongs);
router.post('/', protect, upload.single('file') ,setSong);

router.put('/:id',protect,updateSong );
router.delete('/:id',protect,  deleteSong);


module.exports = router