import React, { Component } from 'react'
import { withRouter } from 'react-router'
import styles from './Economic.less'

class Economic extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  onClickMenu(index) {
    event.preventDefault()

    this.props.router.push({
      pathname: '/index',
      query: {

      }
    })
  }

  onClickClose(index) {
    event.preventDefault()

    this.props.router.push({
      pathname: '/main',
      query: {

      }
    })
  }

  render() {
    return (
    	<div className={styles.bg}>
        <div className={styles.close} onClick={this.onClickClose.bind(this)}></div>
        <div className={styles.menu} onClick={this.onClickMenu.bind(this)}></div>
      </div>
    )
  }
}

export default withRouter(Economic)