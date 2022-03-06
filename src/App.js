import React, { useState } from 'react';
import ExerciseDetails from './components/ExerciseDetails';
import ExerciseList from './components/ExerciseList';

import './App.css';

const App = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  return (
    <div className='app'>
      <ExerciseList selectExercise={(exercise) => setSelectedExercise(exercise)} selectedExercise={selectedExercise} />
      <ExerciseDetails selectedExercise={selectedExercise} />
    </div>
  );
}

export default App;
