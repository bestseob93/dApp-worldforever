import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
// import { Map } from 'immutable';
import { connect } from 'react-redux';
import LandingHero from 'components/Home/LandingHero';
import CardList from 'components/Home/CardList';

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
    const data = [
      {
        title: 'Human Right in North Korea',
        description: 'aaa'
      },
      {
        title: 'Homeless in London Street',
        description: 'aaa'
      }
    ];

    console.log(data);
    return (
      <Fragment>
        <LandingHero />
        {/* <button type="button" onClick={this.onClick}>fetch data</button> */}
        <CardList cards={data} />
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
