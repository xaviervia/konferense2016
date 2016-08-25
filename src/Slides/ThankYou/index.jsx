import React from 'react'
import Screen from 'Screen'
import * as UI from '@klarna/ui'

export default React.createClass({
  getInitialState () {
    return { current: 0 }
  },

  render () {
    return [
      (<Screen onClick={() => this.setState({ current: 1 })}>
        <div style={{ textAlign: 'center' }}>
          <UI.icons.Done color='success' />
          <UI.Title.Primary>
            Thank you
          </UI.Title.Primary>
        </div>
      </Screen>),
      (<Screen onClick={() => this.setState({ current: 0 })}>
        <div>
          <UI.Title.Primary margins>
            #front_end
          </UI.Title.Primary>
          <UI.Title.Primary>
            @xaviervia
          </UI.Title.Primary>
          <UI.Title.Primary>
            fernando.canel@klarna.com
          </UI.Title.Primary>
        </div>
      </Screen>)
    ][this.state.current]
  }
})
