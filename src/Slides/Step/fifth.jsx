import React from 'react'
import Screen from 'Screen'
import * as Button from '@klarna/ui/Button'
import { Content } from '@klarna/ui/Block'
import * as Title from '@klarna/ui/Title'
import Fieldset from '@klarna/ui/Fieldset'
import UncontrolledField from '@klarna/ui/uncontrolled/Field'
import UncontrolledDropdown from '@klarna/ui/uncontrolled/Dropdown'
import * as UncontrolledSwitch from '@klarna/ui/uncontrolled/Switch'
import * as Dialog from '@klarna/ui/Dialog'
import { Close } from '@klarna/ui/IconButton'
import Subtitle from '@klarna/ui/Subtitle'

export default React.createClass({
  getInitialState () {
    return { open: false }
  },

  render () {
    return (
      <Screen>
        <Content>
          <Button.Primary onClick={() => this.setState({ open: true })}>
            Open
          </Button.Primary>
        </Content>

        <form>
          <Dialog.Overlay show={this.state.open}>
            <Dialog.Main>
              <Dialog.Icon>
                <Close onClick={() => this.setState({ open: false })} />
              </Dialog.Icon>

              <Dialog.Content>
                <Title.Primary margins>
                  Enter your data
                </Title.Primary>

                <Subtitle margins>Address</Subtitle>
                <Fieldset margins>
                  <UncontrolledField
                    name='given-name' label='Given name'
                    top left size='1/2' />
                  <UncontrolledField
                    name='last-name' label='Last name'
                    top right size='1/2' />
                  <UncontrolledDropdown
                    name='planet' label='Planet'
                    options={[
                      { key: '', label: 'Pick one', hidden: true },
                      { key: 'earth', label: 'Earth' },
                      { key: 'mars', label: 'Mars' }
                    ]}
                    bottom />
                </Fieldset>

                <Fieldset margins>
                  <UncontrolledSwitch.Checkbox name='agreed'>
                    Do you agree with the terms?
                  </UncontrolledSwitch.Checkbox>
                </Fieldset>
              </Dialog.Content>

              <Dialog.Footer>
                <Button.Primary style={{ width: '100%' }}>
                  Continue
                </Button.Primary>
              </Dialog.Footer>
            </Dialog.Main>
          </Dialog.Overlay>
        </form>
      </Screen>
    )
  }
})
