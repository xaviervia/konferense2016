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
        onClick={() => this.setState({ current: 3 })}>
        <div>
          <GistEmbed gistId='5bea62f8c89448335a4b75b5e826a2c5' />
        </div>
      </Screen>),

      (<Screen
        onClick={() => this.setState({ current: 4 })}>
        <Title.Primary margins>
          Easy. Stateless.
        </Title.Primary>
      </Screen>),

      (<Screen>
        <Title.Primary margins>
          Easy. Stateless. Standard.
        </Title.Primary>
      </Screen>)
    ][this.state.current]
  }
})
