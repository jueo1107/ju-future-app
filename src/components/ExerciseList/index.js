import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import excercisesList from './exercises.json';
import './index.css';

const ExerciseList = ({ selectExercise, selectedExercise }) => {
    const [searchText, setSearchText] = useState(null);
    const [exercises, setExercisesList] = useState(excercisesList);

    const handleSearch = (event) => {
        setSearchText(event.target.value)
    };

    useEffect(() => {
        let filteredExercises = excercisesList;
        if (searchText) {
            filteredExercises = excercisesList.filter(exercise => {
                const filterValue = searchText.toLowerCase();
                const exerciseName = exercise.name.toLowerCase();
                return exerciseName.includes(filterValue);
            });
        }
        setExercisesList(filteredExercises);
    }, [searchText]);

    const debouncedSearch = debounce(handleSearch, 1000);

    return (
        <div className='exercises'>
            <input className='search-bar' onChange={debouncedSearch} />
            {exercises.map(exercise => {
                return (
                    <div className={selectedExercise?.id === exercise.id ? 'selected-exercise' : 'exercise'} onClick={() => selectExercise(exercise)}>
                        {exercise.name}
                    </div>
                )
            })}
        </div>
    )
};

export default ExerciseList ;