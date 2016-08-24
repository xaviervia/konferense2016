import React from 'react'
import Screen from 'Screen'
import { Content } from '@klarna/ui/Block'
import { Close } from '@klarna/ui/IconButton'
import * as Button from '@klarna/ui/Button'
import * as Title from '@klarna/ui/Title'
import * as Paragraph from '@klarna/ui/Paragraph'
import * as Dialog from '@klarna/ui/Dialog'
import UncontrolledInstallments from '@klarna/ui/uncontrolled/Installments'

import styles from './styles.css'

export default function Step () {
  return (
    <div>
      <Screen>
        <Content>
          <Title.Primary margins>
            The wait
          </Title.Primary>

          <Paragraph.Primary margins>
            Friday night, you've been waiting for the pizza deliver for a solid 64 minutes now. It's here, it's hot and you know you the mozzarella will burn your mouth rendering your sense of taste for a week. What do you do?
          </Paragraph.Primary>

          <Button.Secondary className={styles.left}>
            I can wait
          </Button.Secondary>

          <Button.Primary>
            I'll risk it
          </Button.Primary>
        </Content>
      </Screen>

      <Dialog.Overlay show>
        <Dialog.Main>
          <Dialog.Icon>
            <Close />
          </Dialog.Icon>

          <Dialog.Content>
            <UncontrolledInstallments
              options={[
                {
                  key: 'margherita',
                  value: 'Thin crust Margherita',
                  connector: ' with ',
                  info: 'extra mozzarella'
                }
              ]}
            />
          </Dialog.Content>
        </Dialog.Main>
      </Dialog.Overlay>
    </div>
  )
}
