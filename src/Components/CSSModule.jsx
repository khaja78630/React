import React, { Component } from 'react'
import Styles from './main.module.css';

export default class CSSModule extends Component {
  render() {
    return (
      <div>
        <p className = {Styles.success}>Success</p>
        <p className = {Styles.error}>Error</p>
      </div>
    )
  }
}
