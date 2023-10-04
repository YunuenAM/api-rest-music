const asycHandler = require ('express-async-handler')
const fs = require ('fs')

const getSongs = asycHandler(async (req,res) => {
    res.status(200).json({message: 'To get songs'})
})


const setSong = asycHandler( async (req,res) => {
    //To access to file through req.file
    const uploadedFile = req.file;
    if (!uploadedFile){
      throw new Error({message:'No file uploaded'})
    }

    res.status(201).json(
        {message: 'Song created successfully',
        file: uploadedFile.filename,
    });
})

const updateSong = asycHandler( async (req,res) => {
    res.status(200).json({message: `To edit song ${req.params.id}`})
})

const deleteSong = asycHandler( async (req,res) => {
    const songId = require.params.id;

    const fileName = getFileNameFromDatabase(songId);
    //Delete the physical file

    fs.unlink(`uploads/${fileName}`, (err)=>{
        if (err) {
            console.error('Error deleting file:', err);

        } else{
            console.log('File deleted successfully')
        }
    });
    //You can remove the song entry form the database
    res.status(200).json({message: `Song deleted successfully`})
})

module.exports = {
    getSongs,
    setSong,
    updateSong,
    deleteSong
}

