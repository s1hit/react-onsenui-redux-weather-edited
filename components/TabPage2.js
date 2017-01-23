import React from 'react';

import {
  Page
} from 'react-onsenui';

import NavBar from './NavBar';

const TabPage2 = ({title}) => (
  <Page renderToolbar={() => <NavBar title={title} />}>
  </Page>
);

export default TabPage2;
