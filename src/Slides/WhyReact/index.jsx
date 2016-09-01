import React from 'react'
import Screen from 'Screen'
import { Title } from '@klarna/ui'
import GistEmbed from 'react-gist-embed'
import styles from './styles.css'

export default React.createClass({
  getInitialState () {
    return {
      current: 0
    }
  },

  render () {
    return [
      (<Screen
        onClick={() => this.setState({ current: 1 })}>
        <Title.Primary margins>
          &lt;<strong className={styles.strong}>React</strong> butWhy='?' /&gt;
        </Title.Primary>
      </Screen>),

      (<Screen
        onClick={() => this.setState({ current: 2 })}>
        <Title.Primary margins>
          Easy.
        </Title.Primary>
      </Screen>),

      (<Screen
        className={'for-gist'}
        onClick={() => this.setState({ current: 3 })}>
        <div>
          <GistEmbed gistId='5bea62f8c89448335a4b75b5e826a2c5' />
        </div>
      </Screen>),

      (<Screen
        onClick={() => this.setState({ current: 4 })}>
        <Title.Primary margins>
          Easy. Popular.
        </Title.Primary>
      </Screen>),

      (<Screen>
        <iframe style={{width: '160px', height: '30px', border: 0}} src='https://ghbtns.com/github-btn.html?user=facebook&repo=react&type=star&count=true&size=large' frameborder='0' scrolling='0' width='160px' height='30px'></iframe>
      </Screen>)
    ][this.state.current]
  }
})
