import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video'

import styles from './Video.less'
import 'react-html5video/dist/ReactHtml5Video.css'

let videos = [
    // TODO: Don't hot link these. upload them somewhere.
    'http://download.blender.org/peach/bigbuckbunny_movies/big_buck_bunny_480p_h264.mov',
    'http://media.w3.org/2010/05/sintel/trailer.mp4',
    'http://media.w3.org/2010/05/video/movie_300.mp4',
    // Purposefully not a video to deomnstrate source error state
    'https://github.com/mderrick/react-html5video'
]

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
        <Video controls autoPlay loop muted ref="video" className={styles.video}>
            <source src={videos[0]} type="video/mp4" />
            <Controls>
                <Play />
                <Seek />
                <Time />
                <Mute />
                <Fullscreen />
            </Controls>
        </Video>
        <div className={styles.close} onClick={this.onClickClose.bind(this)}></div>
        <div className={styles.menu} onClick={this.onClickMenu.bind(this)}></div>
      </div>
    )
  }
}

export default withRouter(VideoComponent)