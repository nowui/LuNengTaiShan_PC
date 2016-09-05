import React, { Component } from 'react'
import { withRouter } from 'react-router'
import styles from './Main.less'

class Main extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }

  onClickMenu(index) {
    event.preventDefault()

    let url = '/' + index + '/index'

    this.props.router.push({
      pathname: url,
      query: {

      }
    })
  }

  render() {
    return (
    	<div className={styles.bg}>
        <div className={styles.menu_0} onClick={this.onClickMenu.bind(this, 0)}></div>
        <div className={styles.menu_1} onClick={this.onClickMenu.bind(this, 1)}></div>
      </div>
    )
  }
}

export default withRouter(Main)