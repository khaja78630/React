import React, { Component } from 'react'

export default class InlineStyleSheet extends Component {
  render() {
    const style = {fontSize : '40px', color : 'red'};

    return (
      <div style={style}>InlineStyleSheet</div>
    )
  }
}

