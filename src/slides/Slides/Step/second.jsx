import React from 'react'
import Screen from 'Screen'
import { Content } from '@klarna/ui/Block'
import * as Button from '@klarna/ui/Button'
import * as Title from '@klarna/ui/Title'
import * as Paragraph from '@klarna/ui/Paragraph'

import styles from './styles.css'

export default function Step () {
  return (
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
  )
}
