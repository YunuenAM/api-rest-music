const express = require('express');
const router = express.Router();
const {getSongs, setSong, updateSong, deleteSong} = require('./controllers/songsControllers')


router.get('/', getSongs);
router.post('/', setSong);

router.put('/:id', updateSong );
router.delete('/:id', deleteSong);


module.exports = router