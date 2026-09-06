const express = require('express')
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout

} = require('../controllers/workoutControllers')

const router = express.Router()

// all 
router.get('/', getWorkouts)

// one
router.get('/:id',getWorkout)

// Post
router.post('/', createWorkout)

// delete
router.delete('/:id', deleteWorkout)

//update
router.patch('/:id', updateWorkout)


module.exports = router