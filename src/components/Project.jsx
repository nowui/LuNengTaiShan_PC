import React, { Component } from 'react'
import { withRouter } from 'react-router'
import styles from './Project.less'

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import './Style.css'

let swiper

class Project extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    swiper = new Swiper('.swiper-container-2', {
      pagination: '.swiper-pagination',
      loop: true
    })
  }

  componentWillUnmount() {
    swiper.destroy()
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

  onClickLeft(index) {
    event.preventDefault()

    swiper.slidePrev();
  }

  onClickRight(index) {
    event.preventDefault()

    swiper.slideNext();
  }

  render() {
    return (
    	<div className={styles.bg}>
        <div className="swiper-container-2">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={require('../assets/image/project_0.png')} style={{width: '100%'}} />
            </div>
            <div className="swiper-slide">
              <img src={require('../assets/image/project_1.png')} style={{width: '100%'}} />
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
        <div className={styles.close} onClick={this.onClickClose.bind(this)}></div>
        <div className={styles.menu} onClick={this.onClickMenu.bind(this)}></div>
        <div className={styles.left} onClick={this.onClickLeft.bind(this)}></div>
        <div className={styles.right} onClick={this.onClickRight.bind(this)}></div>
      </div>
    )
  }
}

export default withRouter(Project)