import React from 'react'
import Screen from 'Screen'
import * as Button from '@klarna/ui/Button'
import * as Title from '@klarna/ui/Title'
import Subtitle from '@klarna/ui/Subtitle'
import TextLabel from '@klarna/ui/TextLabel'
import * as Paragraph from '@klarna/ui/Paragraph'
import Block, { Content } from '@klarna/ui/Block'
import Amount from '@klarna/ui/Amount'
import Label from '@klarna/ui/Label'
import Link from '@klarna/ui/Link'

import styles from './styles.css'

/*
 * Extra topics:
 * - Mixing with plain components
 * - Extending components with inline styles
 * - Class overrides for our components
 * - Adding default attributes through a component
 *   (Link href and target example)
 * - Using the default margins
 * - Inverted coloring
 */

export default function Step () {
  return (
    <Screen>
      <Content>
        <Title.Primary color='blue' margins>
          Lorem ipsum
        </Title.Primary>

        <Paragraph.Primary margins>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacus mauris, pharetra nec sodales at, accumsan nec mauris. Aliquam egestas ut <Link href='http://google.com' target='_blank'>nisl istique</Link> ultrices. Mauris lacus tellus, faucibus placerat malesuada vel, vehicula nec felis. Nam a elementum risus, vitae accumsan urna. Morbi eros dui, sagittis quis mauris sed, pretium sodales eros. Proin tincidunt nibh vel augue egestas euismod.
        </Paragraph.Primary>

        <Subtitle margins>
          Address
        </Subtitle>
        <table>
          <tr>
            <td style={{ paddingRight: '20px' }}>
              <TextLabel margins>
                Name
              </TextLabel>
              <Paragraph.Primary margins>
                John Doe
              </Paragraph.Primary>
            </td>
            <td style={{ paddingRight: '20px' }}>
              <TextLabel margins>
                City
              </TextLabel>
              <Paragraph.Primary margins>
                Stockholm
              </Paragraph.Primary>
            </td>
            <td>
              <TextLabel margins>
                Phone
              </TextLabel>
              <Paragraph.Primary margins>
                +46 700230123
              </Paragraph.Primary>
            </td>
          </tr>
        </table>

        <Button.Secondary className={styles.left}>
          Go back
        </Button.Secondary>

        <Button.Primary>
          Continue
        </Button.Primary>

        <Block blue className={styles.background}>
          <TextLabel margins color='white'>Price</TextLabel>
          <Amount color='white'>€ 150</Amount>

          <Title.Secondary margins color='white'>
            Description of the item bought
          </Title.Secondary>
          <Paragraph.Secondary color='white'>
            Suspendisse sollicitudin rhoncus interdum. Sed vulputate eget magna a ornare. Sed condimentum elementum turpis in dapibus. Curabitur consequat, et varius quam accumsan.&nbsp;<Label design='yellow'>On Sale</Label>
          </Paragraph.Secondary>
        </Block>
      </Content>
    </Screen>
  )
}