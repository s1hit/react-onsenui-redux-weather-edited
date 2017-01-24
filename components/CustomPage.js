import React from 'react';

import {
  Page,
  Button,
  BackButton,
  Toolbar
} from 'react-onsenui';

import NavBar from './NavBar';
import MedicineList from '../containers/MedicineList';

const renderToolbar = (navigator, backButton) => (
  <Toolbar>
    <div className='left'>
      {backButton ? <BackButton onClick={() => navigator.popPage()}>Back</BackButton> : null}
    </div>
    <div className='center'>page2</div>
    <div className='right'><Button onClick={() => navigator.pushPage({component: CustomPage})}>next</Button></div>
  </Toolbar>
);

const CustomPage = ({navigator}) => (
  <Page renderToolbar={() => renderToolbar(navigator, true)}>
    <MedicineList />
  </Page>
);

export default CustomPage;
