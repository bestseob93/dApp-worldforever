import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
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
    return (
      <div>
        <br />
        <br />
        <button type="button" onClick={this.onClick}>fetch data</button>
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
