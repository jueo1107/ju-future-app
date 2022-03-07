import React, { useState, useEffect } from 'react';

import Filters from './Filters';

import './list.css';

const ExerciseList = ({ exercisesList, selectExercise, selectedExerciseId }) => {
    const [searchText, setSearchText] = useState('');
    const [exercises, setExercisesList] = useState(exercisesList);
    const [filters, setFilters] = useState({});

    useEffect(() => {
        let filteredExercises = [...exercisesList];

        if (searchText) {
            filteredExercises = filteredExercises.filter(exercise => {
                const searchedValue = searchText.toLowerCase();
                const exerciseName = exercise.name.toLowerCase();
                return exerciseName.includes(searchedValue);
            });
        };

        const filterExercises = (filter) => {
            filteredExercises = filteredExercises.filter(exercise => {
                let searchedFilterValue = filters[filter].value.toLowerCase().replace(/[, ]+/g, " ").split(' ').join(',');
                if (searchedFilterValue[searchedFilterValue.length - 1] === ',') {
                    searchedFilterValue = searchedFilterValue.slice(0, -1);
                }
                const exerciseValue = exercise[filter] && exercise[filter].toLowerCase();
                const filteredExercise = searchedFilterValue ? exerciseValue && exerciseValue.includes(searchedFilterValue) : exercise;
                return filteredExercise;
            });
        };

        for (const filter in filters) {
            filterExercises(filter);
        };

        setExercisesList(filteredExercises);
    }, [searchText, filters]);

    return (
        <div className='exercises-list'>
            <Filters setSearchText={setSearchText} updateFilters={setFilters} />
            {exercises.map(exercise => {
                const { name, id } = exercise;
                return (
                    <div 
                        className={selectedExerciseId === id ? 'selected-exercise' : 'exercise'} 
                        onClick={() => selectExercise(exercise)}
                    >
                        {name}
                    </div>
                )
            })}
        </div>
    )
};

export default ExerciseList;