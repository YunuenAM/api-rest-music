const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require ('fs');
const {getSongs, setSong, updateSong, deleteSong} = require('../controllers/songsControllers')

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

router.get('/', getSongs);
router.post('/', upload.single('file') ,setSong);

router.put('/:id', updateSong );
router.delete('/:id', deleteSong);


module.exports = router