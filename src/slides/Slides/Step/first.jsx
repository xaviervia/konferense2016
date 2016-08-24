import React from 'react'
import Screen from 'Screen'
import * as Button from '@klarna/ui/Button'

import styles from './styles.css'

export default function Step () {
  return (
    <Screen>
      <Button.Secondary className={styles.left}>
        I can wait
      </Button.Secondary>

      <Button.Primary>
        I'll risk it
      </Button.Primary>
    </Screen>
  )
}
