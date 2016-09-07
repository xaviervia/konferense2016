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
                  The title is primary
                </UI.Title.Primary>
                <UI.Subtitle margins>
                  Just trying to fill up space
                </UI.Subtitle>
                <UI.Fieldset margins>
                  <UI.UncontrolledField
                    name='given-name' label='Given name'
                    top left size='1/2' />
                  <UI.UncontrolledField
                    name='last-name' label='Last name'
                    top right size='1/2' />
                  <UI.UncontrolledDropdown
                    bottom
                    label='Lorem ipsum'
                    name='dropdown-lorem-ipsum'
                    options={[
                      {
                        disabled: true,
                        hidden: true,
                        key: '',
                        label: 'Pick one!'
                      },
                      {
                        key: 'lorem',
                        label: 'Lorem'
                      },
                      {
                        key: 'ipsum',
                        label: 'Ipsum'
                      }
                    ]}
                  />
                </UI.Fieldset>

                <UI.Fieldset margins>
                  <UI.UncontrolledSwitch.Checkbox name='agreed'>
                    Do you agree with the terms?
                  </UI.UncontrolledSwitch.Checkbox>
                </UI.Fieldset>
              </UI.Dialog.Content>

              <UI.Dialog.Footer>
                <UI.Button.Primary style={{ width: '100%' }}>
                  Submit
                </UI.Button.Primary>
              </UI.Dialog.Footer>
            </UI.Dialog.Main>
          </UI.Dialog.Overlay>
        </form>
      </Screen>
    )
  }
})
