import {combineReducers} from 'redux';
import selectedLocation from './selectedLocation';
import locations from './locations';
import medicines from './medicines';
import dialog from './dialog';

const todoApp = combineReducers({
  locations,
  medicines,
  selectedLocation,
  dialog
});

export default todoApp;
