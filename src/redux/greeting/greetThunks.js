// action addresses

const GET_RANDOM_GREETING = 'greeting/GET_RANDOM_GREETING';
const ERROR_STATUS = 'greeting/ERROR_STATUS';

// intial state of the store data
const greetingState = {
  greeting: 'Hello there',
  error: false,
};

// synchronous actions

export const loadRandomGreeting = (payload) => ({
  type: GET_RANDOM_GREETING,
  payload,
});

export const apiError = (payload) => ({
  type: ERROR_STATUS,
  payload,
});

// reducer

const reducer = (state = greetingState, { type, payload }) => {
  switch (type) {
    case GET_RANDOM_GREETING:
      return { ...state, greeting: payload };
    case ERROR_STATUS:
      return { ...state, error: payload };
    default:
      return state;
  }
};

export default reducer;
