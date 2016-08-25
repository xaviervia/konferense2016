import React from 'react'
import Screen from 'Screen'
import * as UI from '@klarna/ui'

export default React.createClass({
  getInitialState () {
    return { open: false }
  },

  render () {
    return (
      <Screen>
        <UI.Block.Content>
          <UI.Button.Primary onClick={() => this.setState({ open: true })}>
            Open
          </UI.Button.Primary>
        </UI.Block.Content>

        <form>
          <UI.Dialog.Overlay show={this.state.open}>
            <UI.Dialog.Main>
              <UI.Dialog.Icon>
                <UI.IconButton.Close onClick={() => this.setState({ open: false })} />
              </UI.Dialog.Icon>

              <UI.Dialog.Content>
                <UI.Title.Primary margins>
                  Enter your data
                </UI.Title.Primary>

                <UI.Subtitle margins>Address</UI.Subtitle>
                <UI.Fieldset margins>
                  <UI.UncontrolledField
                    name='given-name' label='Given name'
                    top left size='1/2' />
                  <UI.UncontrolledField
                    name='last-name' label='Last name'
                    top right size='1/2' />
                  <UI.UncontrolledDropdown
                    name='planet' label='Planet'
                    options={[
                      { key: '', label: 'Pick one', hidden: true },
                      { key: 'earth', label: 'Earth' },
                      { key: 'mars', label: 'Mars' }
                    ]}
                    bottom />
                </UI.Fieldset>

                <UI.Fieldset margins>
                  <UI.UncontrolledSwitch.Checkbox name='agreed'>
                    Do you agree with the terms?
                  </UI.UncontrolledSwitch.Checkbox>
                </UI.Fieldset>
              </UI.Dialog.Content>

              <UI.Dialog.Footer>
                <UI.Button.Primary style={{ width: '100%' }}>
                  Continue
                </UI.Button.Primary>
              </UI.Dialog.Footer>
            </UI.Dialog.Main>
          </UI.Dialog.Overlay>
        </form>
      </Screen>
    )
  }
})
