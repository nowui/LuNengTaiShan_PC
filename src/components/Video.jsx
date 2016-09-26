import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video'
import QueueAnim from 'rc-queue-anim'

import styles from './Video.less'
import 'react-html5video/dist/ReactHtml5Video.css'

class VideoComponent extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {

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

  render() {
    return (
    	<div className={styles.bg}>
        <QueueAnim>
          <div key="0" className={styles.menu} onClick={this.onClickMenu.bind(this)}></div>

          <Video key="1" controls autoPlay loop muted ref="video" className={styles.video}>
              <source src="sport.mp4" type="video/mp4" />
              <Controls>
                  <Play />
                  <Seek />
                  <Time />
                  <Mute />
                  <Fullscreen />
              </Controls>
          </Video>

          <div key="2" className={styles.close} onClick={this.onClickClose.bind(this)}></div>
        </QueueAnim>
      </div>
    )
  }
}

export default withRouter(VideoComponent)