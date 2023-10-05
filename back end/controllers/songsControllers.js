const asyncHandler = require('express-async-handler');
const Song = require('../models/songsModel');

const getSongs = asyncHandler(async (req, res) => {
    const songs = await Song.find();
    res.status(200).json(songs);
});

const setSong = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error('Enter a song');
    }

    // Verificar si el usuario autenticado es un administrador
    if (req.user.role !== 'admin') {
        res.status(403);
        throw new Error('Only admins can create songs');
    }

    const song = await Song.create({
        text: req.body.text,
    });

    res.status(201).json(song);
});

const updateSong = asyncHandler(async (req, res) => {
    const song = await Song.findById(req.params.id);
    if (!song) {
        res.status(404);
        throw new Error('The song was not found');
    }

    // Verificar si el usuario autenticado es un administrador
    if (req.user.role !== 'admin') {
        res.status(403);
        throw new Error('Only admins can update songs');
    }

    const updatedSong = await Song.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });

    res.status(200).json(updatedSong);
});

const deleteSong = asyncHandler(async (req, res) => {
    const song = await Song.findById(req.params.id);
    if (!song) {
        res.status(404);
        throw new Error('The song was not found');
    }

    // Verificar si el usuario autenticado es un administrador
    if (req.user.role !== 'admin') {
        res.status(403);
        throw new Error('Only admins can delete songs');
    }

    await song.deleteOne();

    res.status(200).json({ id: song._id });
});

module.exports = {
    getSongs,
    setSong,
    updateSong,
    deleteSong,
};
