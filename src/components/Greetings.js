import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRandomGreeting from '../redux/greeting/greetThunks';

const Greetings = () => {
  const { error, greeting } = useSelector((state) => state.greetingReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, []);

  return (
    <h2>{`${error ? 'there was an error' : `${greeting}`}`}</h2>
  );
};

export default Greetings;
