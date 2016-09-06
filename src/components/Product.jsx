import React, { Component } from 'react'
import { withRouter } from 'react-router'

import styles from './Product.less'

class Product extends Component {

  constructor(props) {
    super(props)

    this.state = {
      index: -1
    }
  }

  componentDidMount() {

  }

  onClickButton(id) {
    event.preventDefault()

    this.setState({
      index: id
    })
  }

  onClickMenu() {
    event.preventDefault()

    this.props.router.push({
      pathname: '/index',
      query: {

      }
    })
  }

  onClickClose() {
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
        {
          this.state.index > -1 ?
          <div style={{backgroundImage: 'url(' + require('../assets/image/product_mask_' + this.state.index + '.png') + ')', width: '100%', height: '100%'}}></div>
          :
          ''
        }
        {
          this.state.index == 0 ?
          <div className={styles.menu_0} style={{backgroundImage: 'url(' + require('../assets/image/product_menu_0_active.png') + ')'}} onClick={this.onClickButton.bind(this, 0)}></div>
          :
          <div className={styles.menu_0} style={{backgroundImage: 'url(' + require('../assets/image/product_menu_0.png') + ')'}} onClick={this.onClickButton.bind(this, 0)}></div>

        }
        {
          this.state.index == 1 ?
          <div className={styles.menu_1} style={{backgroundImage: 'url(' + require('../assets/image/product_menu_1_active.png') + ')'}} onClick={this.onClickButton.bind(this, 1)}></div>
          :
          <div className={styles.menu_1} style={{backgroundImage: 'url(' + require('../assets/image/product_menu_1.png') + ')'}} onClick={this.onClickButton.bind(this, 1)}></div>

        }
        {
          this.state.index == 2 ?
          <div className={styles.menu_2} style={{backgroundImage: 'url(' + require('../assets/image/product_menu_2_active.png') + ')'}} onClick={this.onClickButton.bind(this, 2)}></div>
          :
          <div className={styles.menu_2} style={{backgroundImage: 'url(' + require('../assets/image/product_menu_2.png') + ')'}} onClick={this.onClickButton.bind(this, 2)}></div>

        }
        {
          this.state.index == 3 ?
          <div className={styles.menu_3} style={{backgroundImage: 'url(' + require('../assets/image/product_menu_3_active.png') + ')'}} onClick={this.onClickButton.bind(this, 3)}></div>
          :
          <div className={styles.menu_3} style={{backgroundImage: 'url(' + require('../assets/image/product_menu_3.png') + ')'}} onClick={this.onClickButton.bind(this, 3)}></div>

        }
        {
          this.state.index == 4 ?
          <div className={styles.menu_4} style={{backgroundImage: 'url(' + require('../assets/image/product_menu_4_active.png') + ')'}} onClick={this.onClickButton.bind(this, 4)}></div>
          :
          <div className={styles.menu_4} style={{backgroundImage: 'url(' + require('../assets/image/product_menu_4.png') + ')'}} onClick={this.onClickButton.bind(this, 4)}></div>

        }
        <div className={styles.close} onClick={this.onClickClose.bind(this)}></div>
        <div className={styles.menu} onClick={this.onClickMenu.bind(this)}></div>
      </div>
    )
  }
}

export default withRouter(Product)