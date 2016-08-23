import React from 'react'
import Screen from 'slides/Screen'
import * as Button from '@klarna/ui/Button'
import { Content } from '@klarna/ui/Block'
import Link from '@klarna/ui/Link'
import * as Title from '@klarna/ui/Title'
import * as Paragraph from '@klarna/ui/Paragraph'
import styles from './styles.css'

export default function Buttons () {
  return (
    <Screen>
      <Content>
        <Title.Primary color='blue' margins>
          Lorem ipsum
        </Title.Primary>

        <Paragraph.Primary margins>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacus mauris, pharetra nec sodales at, accumsan nec mauris. Aliquam egestas ut <Link href='http://google.com' target='_blank'>nisl istique</Link> ultrices. Mauris lacus tellus, faucibus placerat malesuada vel, vehicula nec felis. Nam a elementum risus, vitae accumsan urna. Morbi eros dui, sagittis quis mauris sed, pretium sodales eros. Proin tincidunt nibh vel augue egestas euismod.
        </Paragraph.Primary>

        <Button.Secondary className={styles.left}>
          Go back
        </Button.Secondary>

        <Button.Primary>
          Continue
        </Button.Primary>
      </Content>
    </Screen>
  )
}
