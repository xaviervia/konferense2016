import React from 'react'
import Screen from 'Screen'
import * as Title from '@klarna/ui/Title'
import styles from './styles.css'

export default React.createClass({
  getInitialState () {
    return { current: 0 }
  },

  render () {
    return [
      (<Screen onClick={() => this.setState({ current: 1 })}>
        <Title.Primary margins>
          @klarna/ui components
        </Title.Primary>
      </Screen>),

      (<Screen>
        <Title.Primary margins>
          Join <strong className={styles.strong}>#ui-workshop</strong>
        </Title.Primary>
      </Screen>)
    ][this.state.current]
  }
})
