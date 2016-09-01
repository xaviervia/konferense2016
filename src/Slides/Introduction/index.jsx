import React from 'react'
import Screen from 'Screen'
import * as UI from '@klarna/ui'
import * as Step from '../Step'
import styles from './styles.css'

export default React.createClass({
  getInitialState () {
    return { current: 0 }
  },

  render () {
    return [
      (<Screen onClick={() => this.setState({ current: 1 })}>
        <UI.Title.Primary margins>
          @klarna/ui components
        </UI.Title.Primary>
      </Screen>),

      (<Screen onClick={() => this.setState({ current: 2 })}>
        <UI.Title.Primary margins>
          Join <strong className={styles.strong}>#ui-workshop</strong>
        </UI.Title.Primary>
      </Screen>),

      (<Screen className={styles.postParrots}
        onClick={() => this.setState({ current: 3 })}>
        <UI.Title.Primary
          className={styles.postParrotsTitle}
          margins>
          Let the parrot party!
        </UI.Title.Primary>
      </Screen>),

      (<Step.fifth />)
    ][this.state.current]
  }
})
