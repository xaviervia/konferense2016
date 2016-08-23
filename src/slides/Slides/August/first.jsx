import React from 'react'
import Screen from 'slides/Screen'
import * as Button from '@klarna/ui/Button'
import styles from './styles.css'

export default function Buttons () {
  return (
    <Screen>
      <Button.Secondary className={styles.left}>
        Go back
      </Button.Secondary>

      <Button.Primary>
        Continue
      </Button.Primary>
    </Screen>
  )
}
