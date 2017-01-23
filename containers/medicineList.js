import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {List, Button} from 'react-onsenui';

import Medicine from './Medicine';

import * as Actions from '../actions';

const MedicineList = ({medicines, navigator, actions}) => {
  const changeVisibility = (isVisible) => {
    Object.keys(medicines).map((key) => {
      const medicine = medicines[key];
      medicine.isVisible = isVisible;
      actions.addMedicine(medicine);
    });
  };
  return (
    <div>
      <Button onClick={() => changeVisibility(true)}>表示</Button>
      <Button onClick={() => changeVisibility(false)}>非表示</Button>
      <List
        dataSource={Object.keys(medicines).map((key) => medicines[key]).filter(medicine => medicine.isVisible)}
        renderRow={(medicine) =>
        <Medicine
          key={medicine.id}
          navigator={navigator}
          {...medicine}
        />
      }
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  medicines: state.medicines
});
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicineList);
