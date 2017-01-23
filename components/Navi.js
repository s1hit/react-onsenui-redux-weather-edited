import React from 'react';

import {
  Navigator
} from 'react-onsenui';

import TabPage1 from './TabPage1';

const renderPage = (route, navigator) => (
  <route.component key={route.key} navigator={navigator} />
);

const Navi = () => (
  <Navigator
    renderPage={renderPage}
    initialRoute={{component: TabPage1, key: 'MAIN_PAGE'}}
  />
);

export default Navi;
