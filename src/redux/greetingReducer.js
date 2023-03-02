import { FETCH_RANDOM_GREETING_SUCCESS } from '../action/greetingMessage';

const initialState = {
  message: null,
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RANDOM_GREETING_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default greetingReducer;
