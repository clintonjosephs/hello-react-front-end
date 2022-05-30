import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRandomGreeting from '../redux/greeting/greetThunks';
import styles from './Greetings.module.css';

const Greetings = () => {
  const { error, greeting } = useSelector((state) => state.greetingReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, []);

  const fetchGreeting = () => {
    dispatch(fetchRandomGreeting());
  };

  return (
    <>
      <h3>
        Greet demo app
        <hr />
      </h3>
      {`${error ? 'there was an error' : `${greeting}`}`}
      <hr />
      <button type="button" className={styles.btnFetch} onClick={fetchGreeting}>Get Greeting</button>
    </>
  );
};

export default Greetings;
