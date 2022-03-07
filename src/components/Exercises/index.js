import React, { useState, useEffect } from 'react';

import List from './List';
import Details from './Details';

import ExercisesList from './exercises.json';

import './exercises.css';

const Exercises = () => {
    const [selectedExercise, setSelectedExercise] = useState(null);

    //adding this useEffect here if we wanted to automatically select the first exercise
    //in the list after an api call to fetch the exercises when the page loads. Using [] here
    //because we have the exercises imported from another file and we can call this useEffect once 
    //when this component renders. It would be a different value within [] if we were doing api calls
    useEffect(() => {
        setSelectedExercise(ExercisesList[0])
    }, []);

    return (
        <div className='exercises'>
            <List 
                exercisesList={ExercisesList} 
                selectExercise={(exercise) => setSelectedExercise(exercise)} 
                selectedExerciseId={selectedExercise?.id} 
            />
            <Details selectedExercise={selectedExercise} />
        </div>
    )
};

export default Exercises;