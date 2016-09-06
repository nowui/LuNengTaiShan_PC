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
        <div style={{backgroundImage: 'url(' + require('../assets/image/button_menu.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/button_close.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/button_left.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/button_right.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/main_bg.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/main_menu_0.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/main_menu_1.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/main_menu_2.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/main_menu_3.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/main_menu_4.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/detail_bg.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/project_0.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/project_1.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/product_bg.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/sport_bg.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/economic_bg.png') + ')'}}></div>
      </div>
    )
  }
}

export default withRouter(Index)