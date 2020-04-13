import { RECEIVED_SCREENER_DATA, REQUESTING_SCREENER_DATA } from '../actions';

const screenerData = (state = {}, action) => {
  switch (action.type) {
    case REQUESTING_SCREENER_DATA:
      return {
        screener: [],
      };
    case RECEIVED_SCREENER_DATA:
      return {
        screener: action.data,
      };
    default:
      return state;
  }
};

export default screenerData;
