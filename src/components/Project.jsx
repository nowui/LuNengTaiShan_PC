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

    this.state = {
      isLoad: false,
      activeIndex: -1
    }
  }

  componentDidMount() {
    let self = this

    setTimeout(function() {
      swiper = new Swiper('.swiper-container-2', {
        pagination: '.swiper-pagination',
        loop: true,
        onSlideChangeStart: function(swiper) {
          self.setState({
            isLoad: false
          })
        },
        onSlideChangeEnd: function(swiper) {
          let index = swiper.activeIndex - 1;

          if(index < 0) {
            index = 1
          } else if(index > 1) {
            index = 0
          }

          console.log(index)

          self.setState({
            isLoad: true,
            activeIndex: index
          })
        }
      })
    }, 1000)
  }

  componentWillUnmount() {
    swiper.destroy()
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
        <QueueAnim duration={1000} interval={500} animConfig={{opacity:[1, 0],translateX:[0, 100]}}>
          <div key="0" className="swiper-container-2">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <img src={require('../assets/image/project_0.png')} style={{width: '100%'}} />
                <div className={styles.circle_0}></div>
                <div className={styles.circle_1}></div>
                <div className={styles.circle_2}></div>
                <div className={styles.circle_3}></div>
                <div className={styles.circle_div_4}>
                  <div className={styles.circle_4}></div>
                </div>
                <div className={styles.logo}></div>
              </div>
              <div className="swiper-slide">
                <img src={require('../assets/image/project_1.png')} style={{width: '100%'}} />
              </div>
            </div>
          <div className="swiper-pagination"></div>
          </div>

          <div key="1" className={styles.menu} onClick={this.onClickMenu.bind(this)}></div>

          <div key="2" className={styles.left} onClick={this.onClickLeft.bind(this)}></div>

          <div key="3" className={styles.right} onClick={this.onClickRight.bind(this)}></div>

          <div key="4" className={styles.close} onClick={this.onClickClose.bind(this)}></div>
        </QueueAnim>

        {
          this.state.isLoad ?
            this.state.activeIndex == 0 ?
            ''
            :
              this.state.activeIndex == 1 ?
              <div className={styles.text_1_animation}></div>
              :
              ''
          :
          ''
        }

      </div>
    )
  }
}

export default withRouter(Project)