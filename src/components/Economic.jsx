import React, { Component } from 'react'
import { withRouter } from 'react-router'
import QueueAnim from 'rc-queue-anim'

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
      pathname: '/main',
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
        <QueueAnim duration={1000} interval={250} animConfig={{opacity:[1, 0],translateX:[0, 100]}}>
          <div key="0" className={styles.menu} onClick={this.onClickMenu.bind(this)}></div>
          <div key="1" className={styles.title}></div>
          <div key="2" className={styles.text}></div>
          <div key="3" className={styles.content}></div>
          <div key="4" className={styles.note}></div>
          <div key="5" className={styles.close} onClick={this.onClickClose.bind(this)}></div>
        </QueueAnim>
      </div>
    )
  }
}

export default withRouter(Economic)