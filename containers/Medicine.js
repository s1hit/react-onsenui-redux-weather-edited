import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {ListItem} from 'react-onsenui';

import * as Actions from '../actions';

const Medicine = ({
  id,
  name,
  navigator,
  actions
}) => {
  let subtitle;

  return (
    <ListItem onClick={() => {
      // actions.selectLocation(id);
      // navigator.pushPage({component: WeatherPage});
    }} tappable>
      <div className='center'>
        <div className='list__item__title'>
          {name}
        </div>
        <div className='list__item__subtitle'>
          {subtitle}
        </div>
      </div>
    </ListItem>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(
  undefined,
  mapDispatchToProps
)(Medicine);
