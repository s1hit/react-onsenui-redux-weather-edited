import {
  ADD_MEDICINE
} from '../actions';

const medicines = (state = {}, action) => {
  const type = action.type;
  delete action.type;

  switch (type) {
    case ADD_MEDICINE:
      return {
        ...state,
        [action.id]: action
      };
    default:
      return state;
  }
};

export default medicines;
