import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import fetchRandomGreeting from './api/fetchGreetings';
import Greetings from './components/Greetings';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Greetings />} />
    </Routes>
  );
};

export default App;
