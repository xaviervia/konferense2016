import React from 'react'
import Screen from 'Screen'
import * as Title from '@klarna/ui/Title'
import * as Paragraph from '@klarna/ui/Paragraph'
import GistEmbed from 'react-gist-embed'
import styles from './styles.css'

export default React.createClass({
  getInitialState () {
    return {
      subSlide: 'main'
    }
  },

  render () {
    const getVisibility = (key) => ({
      display: key === this.state.subSlide ? 'block' : 'none'
    })

    return (
      <Screen
        onClick={() => this.setState({ subSlide: 'gist' })}>
        <div
          style={getVisibility('main')}>
          <Title.Primary margins>
            &lt;<strong className={styles.strong}>React</strong> butWhy='?' /&gt;
          </Title.Primary>

          <Paragraph.Primary className={styles.paragraph} margins>
            Easy. Stateless. Standard.
          </Paragraph.Primary>
        </div>

        <div style={getVisibility('gist')}>
          <GistEmbed gistId='5bea62f8c89448335a4b75b5e826a2c5' />
        </div>
      </Screen>
    )
  }
})
