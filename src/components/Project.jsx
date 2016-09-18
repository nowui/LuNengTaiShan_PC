import React, { Component } from 'react'
import { withRouter } from 'react-router'
import QueueAnim from 'rc-queue-anim'
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
    setTimeout(function() {
      swiper = new Swiper('.swiper-container-2', {
        pagination: '.swiper-pagination',
        loop: true
      })
    }, 500)
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
        <QueueAnim>
          <div key="0" className={styles.menu} onClick={this.onClickMenu.bind(this)}></div>

          <div key="1" className={styles.left} onClick={this.onClickLeft.bind(this)}></div>

          <div key="2" className="swiper-container-2">
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

          <div key="3" className={styles.right} onClick={this.onClickRight.bind(this)}></div>

          <div key="4" className={styles.close} onClick={this.onClickClose.bind(this)}></div>
        </QueueAnim>
      </div>
    )
  }
}

export default withRouter(Project)