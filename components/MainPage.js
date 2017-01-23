import React from 'react';

import {
  Page,
  Tab,
  Tabbar
} from 'react-onsenui';

import TabPage1 from './TabPage1';
import TabPage2 from './TabPage2';

const renderTabs = () => {
  return [
    {
      content: <TabPage1 key='tab1' title='tab1' />,
      tab: <Tab key='tab1' label='tab1' />
    },
    {
      content: <TabPage2 key='tab2' title='tab2' />,
      tab: <Tab key='tab2' label='tab2' />
    }
  ];
};

const MainPage = () => (
  <Page>
    <Tabbar
      initialIndex={0}
      renderTabs={renderTabs.bind(this)}
    />
  </Page>
);

export default MainPage;
