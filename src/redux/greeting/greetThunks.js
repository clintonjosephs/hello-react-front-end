import * as actions from './greetActions';

const endpoint = 'http://localhost:3003/v1/';

// asyncronous actions
const fetchRandomGreeting = () => async (dispatch) => {
  try {
    await fetch(`${endpoint}greetings/show`)
      .then((response) => response.json())
      .then((json) => {
        dispatch(actions.apiError(false));
        dispatch(actions.loadRandomGreeting(json.data));
      });
  } catch (err) {
    dispatch(actions.apiError(true));
    throw new Error(err);
  }
};

export default fetchRandomGreeting;
