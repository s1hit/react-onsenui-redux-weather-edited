import React from 'react';

import {
  Page,
  Navigator
} from 'react-onsenui';

import Weather from './Weather';

const renderPage = (route, navigator) => (
  <route.component key={route.key} navigator={navigator} />
);

const TabPage1 = () => (
  <Page>
    <Navigator
      renderPage={renderPage}
      initialRoute={{component: Weather, key: 'MAIN_PAGE'}}
    />
  </Page>
);

export default TabPage1;
