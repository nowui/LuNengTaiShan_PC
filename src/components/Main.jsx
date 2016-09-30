import React, { Component } from 'react'
import { withRouter } from 'react-router'
import QueueAnim from 'rc-queue-anim'
import styles from './Main.less'

class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
      index: -1
    }
  }

  componentDidMount() {

  }

  onClickMenu(id) {
    event.preventDefault()

    let url = '/project'

    if(id == 0) {
      url = '/project'
    } else if(id == 1) {
      url = '/sport'
    } else if(id == 2) {
      url = '/product'
    } else if(id == 3) {
      url = '/economic'
    } else if(id == 4) {
      url = '/video'
    }

    this.props.router.push({
      pathname: url,
      query: {

      }
    })
  }

  onMouseOver(id) {
    this.setState({
      index: id
    })
  }

  onMouseOut() {
    this.setState({
      index: -1
    })
  }

  render() {
    return (
    	<div className={styles.bg}>
        <QueueAnim duration={1000} interval={500} animConfig={{opacity:[1, 0],translateX:[0, 100]}}>
          <div key="0" className={styles.sport}>
            <div className={styles.lint_0}></div>
            <div className={styles.lint_1}></div>
            <div className={styles.lint_2}></div>
            <div className={styles.lint_3}></div>
            <div className={styles.sprite_0}></div>
            <div className={styles.sprite_1}></div>
            <div className={styles.sprite_2}></div>
            <div className={styles.sprite_3}></div>
            <div className={styles.sprite_4}></div>
          </div>
          <div key="1" className={styles.menu} style={{backgroundImage: 'url(' + require('../assets/image/main_menu_' + this.state.index + '.png') + ')'}}>
            <div className={styles.menu_0} onMouseOver={this.onMouseOver.bind(this, 0)} onMouseOut={this.onMouseOut.bind(this)} onClick={this.onClickMenu.bind(this, 0)}></div>
            <div className={styles.menu_1} onMouseOver={this.onMouseOver.bind(this, 1)} onMouseOut={this.onMouseOut.bind(this)} onClick={this.onClickMenu.bind(this, 1)}></div>
            <div className={styles.menu_2} onMouseOver={this.onMouseOver.bind(this, 2)} onMouseOut={this.onMouseOut.bind(this)} onClick={this.onClickMenu.bind(this, 2)}></div>
            <div className={styles.menu_3} onMouseOver={this.onMouseOver.bind(this, 3)} onMouseOut={this.onMouseOut.bind(this)} onClick={this.onClickMenu.bind(this, 3)}></div>
            <div className={styles.menu_4} onMouseOver={this.onMouseOver.bind(this, 4)} onMouseOut={this.onMouseOut.bind(this)} onClick={this.onClickMenu.bind(this, 4)}></div>
          </div>
          <div key="2" className={styles.logo}></div>
        </QueueAnim>
      </div>
    )
  }
}

export default withRouter(Main)