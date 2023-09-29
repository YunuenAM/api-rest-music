const getSongs = (req,res) => {
    res.status(200).json({message: 'To get songs'})
}


const setSong = (req,res) => {
    res.status(201).json({message: 'To create songs'})
}

const updateSong = (req,res) => {
    res.status(200).json({message: `To edit song ${req.params.id}`})
}

const deleteSong = (req,res) => {
    res.status(200).json({message: `To delete song ${req.params.id}`})
}

module.exports = {
    getSongs,
    setSong,
    updateSong,
    deleteSong
}

