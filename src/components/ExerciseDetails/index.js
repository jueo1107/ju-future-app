import React from 'react';

const ExerciseDetails = ({ selectedExercise }) => {
    console.log('seleteExercise', selectedExercise);
    return (
        <div>{selectedExercise?.name}</div>
    )
};

export default ExerciseDetails;