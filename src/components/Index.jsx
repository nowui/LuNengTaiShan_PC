import React, { Component } from 'react'
import { withRouter } from 'react-router'
import QueueAnim from 'rc-queue-anim'
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
        <QueueAnim duration={1000} interval={500} animConfig={{opacity:[1, 0],translateX:[0, 100]}}>
          <div key="0" className={styles.logo}></div>
          <div key="1" className={styles.text}></div>
          <div key="2" className={styles.menu_0} onClick={this.onClickMenu.bind(this)}></div>
          <div key="3" className={styles.address}></div>
        </QueueAnim>
        <div style={{backgroundImage: 'url(' + require('../assets/image/main_bg.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/index_bg.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/main_menu_0.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/main_menu_1.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/main_menu_2.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/main_menu_3.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/main_menu_4.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/button_left.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/detail_bg.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/button_right.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/button_close.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/product_bg.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/button_menu.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/project_1.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/project_0.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/sport_0_bg.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/sport_1_bg.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/sport_2_bg.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/sport_3_bg.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/economic_bg.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/product_menu_0.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/product_menu_1.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/product_menu_2.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/product_menu_3.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/product_menu_4.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/product_menu_0_active.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/product_menu_4_active.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/product_mask_0.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/product_menu_1_active.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/product_mask_1.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/product_menu_2_active.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/product_mask_2.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/product_menu_3_active.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/product_mask_3.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/product_mask_4.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/economic_title.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/economic_content.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/main_logo.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/product_note.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/economic_note.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/main_line_0.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/main_line_1.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/main_line_2.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/main_line_3.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/main_sprite_0.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/main_sprite_1.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/main_sprite_2.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/main_sprite_3.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/main_sprite_4.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/sport_0_title.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/sport_2_title.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/sport_1_title.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/sport_3_title.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/sport_1_text.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/sport_2_text.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/sport_3_text.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/project_1_text.png') + ')'}}></div>
        <div style={{backgroundImage: 'url(' + require('../assets/image/main_menu_-1.png') + ')'}}></div>
      </div>
    )
  }
}

export default withRouter(Index)