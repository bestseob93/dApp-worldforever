import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { Map } from 'immutable';
import { connect } from 'react-redux';
import LandingHero from 'components/Home/LandingHero';

import { actionCreators as mainActions } from 'ducks/main.duck';

class HomeContainer extends Component {
  componentDidMount() {
    const { MainActions } = this.props;
    MainActions.initIpfs();
  }

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
      <Fragment>
        <LandingHero />
        {/* <button type="button" onClick={this.onClick}>fetch data</button> */}
      </Fragment>
    );
  }
}

export default connect(
  state => ({
    datas: state.main.get('datas'),
    ipfs: state.main.get('ipfs')
  }),
  dispatch => ({
    MainActions: bindActionCreators(mainActions, dispatch)
  })
)(HomeContainer);
