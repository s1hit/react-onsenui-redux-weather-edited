import React from 'react';

import {
  Page,
  Navigator
} from 'react-onsenui';

import CustomPage from './CustomPage';

const renderPage = (route, navigator) => (
  <route.component key={route.key} navigator={navigator} />
);

const TabPage2 = () => (
  <Page>
    <Navigator
      renderPage={renderPage}
      initialRoute={{component: CustomPage, key: 'CUSTOM_PAGE'}}
    />
  </Page>
);

export default TabPage2;
