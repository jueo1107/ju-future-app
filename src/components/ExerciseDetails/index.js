import React from 'react';
import './index.css';

const ExerciseDetails = ({ selectedExercise }) => {
    return (
        <div className='wrapper'>
            <div className='exercise-details'>
                <div className='exercise-name'>
                    {selectedExercise?.name}
                </div>
                <div>
                    {selectedExercise?.description}
                </div>
            </div>
            <div className='exercise-video'>
                <iframe width="100%" height="100%" src={selectedExercise?.video.url}/>
            </div>
        </div>
    )
};

export default ExerciseDetails;