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
      (<Screen onClick={() => this.setState({ current: 2 })}>
        <div style={{ textAlign: 'center' }}>
          <UI.Title.Primary margins>
            Are you doing front end?<br />
            Ping <strong style={{fontWeight: 600}}>#front_end</strong>
          </UI.Title.Primary>

          <UI.Paragraph.Primary margins>
            "Hi! I'm <em>Jane</em> from the <em>Best Team</em> and we are doing <em>A, B and C</em>"
          </UI.Paragraph.Primary>
        </div>
      </Screen>),
      (<Screen onClick={() => this.setState({ current: 0 })}>
        <div style={{ textAlign: 'center' }}>
          <UI.Title.Primary margins>
            <span
              style={{color: '#0074c8'}}>
              <i className='fa fa-github' aria-hidden='true'></i> <i className='fa fa-twitter' aria-hidden='true'></i>
            </span> @xaviervia
          </UI.Title.Primary>
          <UI.Title.Primary>
            <UI.icons.Mail /> fernando.canel@klarna.com
          </UI.Title.Primary>
        </div>
      </Screen>)
    ][this.state.current]
  }
})
