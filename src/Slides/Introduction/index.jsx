import React from 'react'
import Screen from 'Screen'
import * as Title from '@klarna/ui/Title'
// import * as Paragraph from '@klarna/ui/Paragraph'

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
      <Screen>
        <Title.Primary
          onClick={() => this.setState({ subSlide: 'join' })}
          style={getVisibility('main')}
          margins>
          @klarna/ui components
        </Title.Primary>

        <Title.Primary style={getVisibility('join')} margins>
          Join #ui-workshop
        </Title.Primary>
      </Screen>
    )
  }
})
