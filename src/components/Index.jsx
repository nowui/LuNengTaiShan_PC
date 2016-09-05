import React, { Component } from 'react'
import { withRouter } from 'react-router'
import styles from './Index.less'

class Index extends Component {

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

  render() {
    return (
    	<div className={styles.bg}>
        <div className={styles.menu_0} onClick={this.onClickMenu.bind(this)}></div>
      </div>
    )
  }
}

export default withRouter(Index)