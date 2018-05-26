import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Map } from 'immutable';
import { connect } from 'react-redux';

import { actionCreators as mainActions } from 'ducks/main.duck';

class HomeContainer extends Component {
  onClick = async () => {
    console.log('homecontainer button');
    const { MainActions } = this.props;
    await MainActions.requestData();
  }

  render() {
    console.log(this.props);
    const a = Map({
      b: 0,
      c: 3
    });

    console.log(a);
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <button style={{ display: 'block' }} type="button" onClick={this.onClick}>fetch data</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    datas: state.main.get('datas')
  }),
  dispatch => ({
    MainActions: bindActionCreators(mainActions, dispatch)
  })
)(HomeContainer);
