import React from 'react';

import {
  Page
} from 'react-onsenui';

import NavBar from './NavBar';
import MedicineList from '../containers/MedicineList';

const TabPage2 = ({title}) => (
  <Page renderToolbar={() => <NavBar title={title} />}>
    <MedicineList />
  </Page>
);

export default TabPage2;
