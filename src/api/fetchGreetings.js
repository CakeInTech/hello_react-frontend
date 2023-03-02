import { FETCH_RANDOM_GREETING_REQUEST, FETCH_RANDOM_GREETING_SUCCESS, FETCH_RANDOM_MESSAGE_FAILURE } from '../action/greetingMessage';

const fetchRandomGreeting = () => (dispatch) => {
  dispatch({ type: FETCH_RANDOM_GREETING_REQUEST });

  return fetch('http://localhost:3000/api/v1/greetings')
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: FETCH_RANDOM_GREETING_SUCCESS,
        payload: data.content,
      });
    })
    .catch((error) => {
      dispatch({
        type: FETCH_RANDOM_MESSAGE_FAILURE,
        payload: error.message,
      });
    });
};

export default fetchRandomGreeting;
