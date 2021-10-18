const express = require('express');
const router = express.Router();

const Speedrun = require('../models/speedrun')

// speedruns index route 
router.get('/', async (req, res) => {
    try {
        const speedruns = await Speedrun.all
        res.json({speedruns})
    } catch(err) {
        escape.status(500).json({err})
    }
})

// speedruns id route
router.get('/:id', async (req, res) => {
    try {
        const speedrun = await Speedrun.findById(req.params.id)
        res.json(speedrun)
    } catch(err) {
        escape.status(500).json({err})
    }
})

// create speedrun route
router.post('/', async (req, res) => {
    try {
        const speedrun = await Speedrun.create(req.body.game, req.body.runner, req.body.time)
        res.json(speedrun)
    } catch(err) {
        escape.status(500).json({err})
    }
})

// speedrun update route
router.patch('/:id', async (req, res) => {
    try {
        const speedrun = await Speedrun.findbyId(req.params.id)
        const updatedRun = await speedrun.update()
        res.json({speedrun: updatedRun})
    } catch(err) {
        escape.status(500).json({err})
    }
})

// delete speedrun route
router.delete('/:id', async (req, res) => {
    try {
        const speedrun = await Speedrun.findbyId(req.params.id)
        await speedrun.destroy()
        res.status(204).json('Speedrun removed.')
    } catch(err) {
        escape.status(500).json({err})
    }
})