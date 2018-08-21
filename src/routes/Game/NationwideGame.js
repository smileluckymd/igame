// 全国赛事
// LSY
// 2018-8-18

import React, { Component } from 'react';
import { connect } from 'dva';
@connect(({ game, loading }) => ({
  game,
  submitting: loading.effects['game/queryGame'],
}))
export default class NationwideGame extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'game/queryGame',
      payload: 'zzzz',
    });
  }

  render() {
    const {
      game: { list },
    } = this.props;
    const name = list.map(child => <div key={child.name}>{child.name}</div>);
    return <div>{name}</div>;
  }
}
