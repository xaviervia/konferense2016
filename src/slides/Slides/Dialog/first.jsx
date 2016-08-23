import React from 'react'
import * as Dialog from '@klarna/ui/Dialog'
import { Close } from '@klarna/ui/IconButton'
import * as Button from '@klarna/ui/Button'
import * as Title from '@klarna/ui/Title'
import Screen from 'Screen'
import styles from './styles.css'

export default React.createClass({
  getInitialState () {
    return { step: 'initial' }
  },

  render () {
    const { step } = this.state

    return (
      <div>
        <Screen>
          <Button.Primary onClick={() => this.setState({ step: 'window' })}>
            Open
          </Button.Primary>

          <Button.Primary onClick={() => this.setState({ step: 'opposite' })}>
            Alternative
          </Button.Primary>
        </Screen>

        <Dialog.Overlay show={step === 'window'}>
          <Dialog.Main>
            <Dialog.Icon>
              <Close onClick={() => this.setState({ step: 'initial' })} />
            </Dialog.Icon>

            <Dialog.Content className={styles.content}>
              <Title.Primary>
                Let's start
              </Title.Primary>
            </Dialog.Content>

            <Dialog.Footer>
              <Button.Primary className={styles.button}>
                Complete the sequence
              </Button.Primary>
            </Dialog.Footer>
          </Dialog.Main>
        </Dialog.Overlay>

        <Dialog.Overlay show={step === 'opposite'}>
          <Dialog.Main>
            <Dialog.Icon>
              <Close onClick={() => this.setState({ step: 'initial' })} />
            </Dialog.Icon>

            <Dialog.Content className={styles.content}>
              <Title.Primary>
                Let's start
              </Title.Primary>
            </Dialog.Content>

            <Dialog.Footer>
              <Button.Primary className={styles.button}>
                Complete the sequence
              </Button.Primary>
            </Dialog.Footer>
          </Dialog.Main>
        </Dialog.Overlay>
      </div>
    )
  }
})
