import React from 'react';

import './details.css';

const ExerciseDetails = ({ selectedExercise }) => {
    const { name, description, muscle_groups, movement_patterns, equipment_required, video } = selectedExercise || {};
    return (
        selectedExercise && (
            <div className='wrapper'>
                <div className='exercise-details'>
                    <div className='exercise-name'>{name}</div>
                    <div className='exercise-detail'>{description}</div>
                    {muscle_groups && (
                        <div className='exercise-detail'>{`Muscle Groups: ${muscle_groups}`}</div>
                    )}
                    {movement_patterns && (
                        <div className='exercise-detail'>{`Movement Patterns: ${movement_patterns}`}</div>
                    )}
                    {equipment_required && (
                        <div className='exercise-detail'>{`Equipment Required: ${equipment_required}`}</div>
                    )}
                </div>
                <div className='exercise-video'>
                    <iframe width="100%" height="100%" frameBorder="0" src={video.url}/>
                </div>
            </div>
        )
    )
};

export default ExerciseDetails;