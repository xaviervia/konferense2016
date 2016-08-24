import React from 'react'
import * as Dialog from '@klarna/ui/Dialog'
import { Close } from '@klarna/ui/IconButton'
import * as Button from '@klarna/ui/Button'
import * as Title from '@klarna/ui/Title'
import Screen from 'Screen'
import styles from './styles.css'

export default React.createClass({
  getInitialState () {
    return { open: 'initial' }
  },

  render () {
    const { open } = this.state

    return (
      <div>
        <Screen>
          <Button.Primary onClick={() => this.setState({ open: true })}>
            Open
          </Button.Primary>
        </Screen>

        <Dialog.Overlay show={open}>
          <Dialog.Main>
            <Dialog.Icon>
              <Close onClick={() => this.setState({ open: false })} />
            </Dialog.Icon>

            <Dialog.Content className={styles.content}>
              <Title.Primary>
                Let's start
              </Title.Primary>
            </Dialog.Content>

            <Dialog.Footer>
              <Button.Primary className={styles.button}>
                Complete
              </Button.Primary>
            </Dialog.Footer>
          </Dialog.Main>
        </Dialog.Overlay>
      </div>
    )
  }
})
