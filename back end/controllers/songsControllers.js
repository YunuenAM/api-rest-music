const asycHandler = require ('express-async-handler');
const Song = require('../models/songsModel')
const fs = require ('fs')

const getSongs = asycHandler(async (req,res) => {

    const songs = await Song.find()

    res.status(200).json({songs})
});


const setSong = asycHandler( async (req,res) => {
    //To access to file through req.file
    const uploadedFile = req.file;
    if (!uploadedFile){
      throw new Error({message:'No file uploaded'})
    }
     const song = await Song.create({
        text: req.body.text,
     })
    
    res.status(201).json(song)
        
    });

const updateSong = asycHandler( async (req,res) => {

    const song = await Song.findById(req.params.id);
    if (!song) {
        res.status(404)
        throw new Error('The file was not found')
    }
    const updatedSong = await Song.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(updatedSong)
})

const deleteSong = asycHandler( async (req,res) => {
    const songId = await Song.findById(require.params.id)

    const fileName = getFileNameFromDatabase(songId);
    //Delete the physical file

    fs.unlink(`uploads/${fileName}`, (err)=>{
        if (err) {
            console.error('Error deleting file:', err);

        } else{
            console.log('File deleted successfully')
        }
    });
    
    await song.deleteOne()
    //You can remove the song entry form the database
    res.status(200).json({id: song._id})
})

module.exports = {
    getSongs,
    setSong,
    updateSong,
    deleteSong
}

