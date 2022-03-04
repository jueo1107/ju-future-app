import React from 'react';

import excercisesList from './exercises.json';

const ExerciseList = ({ selectExercise }) => {
    return (
        <div>
            {excercisesList.map(exercise => {
                return <div onClick={() => selectExercise(exercise)}>{exercise.name}</div>
            })}
        </div>
    )
};

export default ExerciseList ;