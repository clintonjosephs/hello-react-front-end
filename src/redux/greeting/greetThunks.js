import * as actions from './greetActions';

const endpoint = 'https://localhost:3000/v1/';

// asyncronous actions
const fetchRandomGreeting = () => async (dispatch) => {
  try {
    await fetch(`${endpoint}greetings/show`)
      .then((response) => response.toJSON())
      .then((json) => {
        dispatch(actions.apiError(false));
        dispatch(actions.loadRandomGreeting(json));
      });
  } catch (err) {
    dispatch(actions.apiError(true));
    throw new Error(err);
  }
};

export default fetchRandomGreeting;
