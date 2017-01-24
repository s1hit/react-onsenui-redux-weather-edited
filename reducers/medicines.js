import {
  ADD_MEDICINE
} from '../actions';

const medicines = (state = {}, action) => {
  switch (action.type) {
    case ADD_MEDICINE:
      delete action.type;
      return {
        ...state,
        [action.id]: action
      };
    default:
      return state;
  }
};

export default medicines;
