const express =  require('express')
const router = express.Router()
const {getSongs, setSong, updateSong,deleteSong} = require('../controllers/songsControllers')
const {protect} = require('../middleware/authMiddleware')   


//To get songs
router.get('/', protect,getSongs)


//To create songs
router.post('/', protect,setSong)


//To edit songs
router.put('/:id',protect, updateSong)

//To delete songs
router.delete('/:id', protect, deleteSong)


module.exports = router