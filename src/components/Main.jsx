import React, { Component } from 'react'
import { withRouter } from 'react-router'
import styles from './Main.less'

let index = 0

class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
      index: index
    }
  }

  componentDidMount() {

  }

  onClickMenu(id) {
    event.preventDefault()

    index = id

    this.setState({
      index: index
    })

    let url = '/project'

    if(index == 0) {
      url = '/project'
    } else if(index == 1) {
      url = '/sport'
    } else if(index == 2) {
      url = '/product'
    } else if(index == 3) {
      url = '/economic'
    } else if(index == 4) {
      url = '/video'
    }

    this.props.router.push({
      pathname: url,
      query: {

      }
    })
  }

  render() {
    return (
    	<div className={styles.bg}>
        <div className={styles.menu} style={{backgroundImage: 'url(' + require('../assets/image/main_menu_' + this.state.index + '.png') + ')'}}>
          <div className={styles.menu_0} onClick={this.onClickMenu.bind(this, 0)}></div>
          <div className={styles.menu_1} onClick={this.onClickMenu.bind(this, 1)}></div>
          <div className={styles.menu_2} onClick={this.onClickMenu.bind(this, 2)}></div>
          <div className={styles.menu_3} onClick={this.onClickMenu.bind(this, 3)}></div>
          <div className={styles.menu_4} onClick={this.onClickMenu.bind(this, 4)}></div>
        </div>
      </div>
    )
  }
}

export default withRouter(Main)