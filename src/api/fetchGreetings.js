import { FETCH_RANDOM_GREETING_REQUEST } from "../action/greetingMessage";
import { FETCH_RANDOM_GREETING_SUCCESS } from "../action/greetingMessage";
import { FETCH_RANDOM_MESSAGE_FAILURE } from "../action/greetingMessage";

export const fetchRandomMessage = () => {
    return dispatch => {
      dispatch({ type: FETCH_RANDOM_GREETING_REQUEST,});
  
      return fetch('http://localhost:3000/api/v1/greetings')
        .then(response => response.json())
        .then(data => {
          dispatch({
             type: FETCH_RANDOM_GREETING_SUCCESS,
             payload: data.text
          })
        })
        .catch(error => {
          dispatch({
              type: FETCH_RANDOM_MESSAGE_FAILURE,
              payload: error.message
          })
        })
    }
 }
 
  