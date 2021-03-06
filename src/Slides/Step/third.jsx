import React from 'react'
import Screen from 'Screen'
import * as UI from '@klarna/ui'
import styles from './styles.css'

export default function Buttons () {
  return (
    <Screen>
      <UI.Block.Content>
        <UI.Title.Primary color='blue' margins>
          Lorem ipsum
        </UI.Title.Primary>

        <UI.Paragraph.Primary margins>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacus mauris, pharetra nec sodales at, accumsan nec mauris. Aliquam egestas ut <UI.Link href='http://google.com' target='_blank'>nisl istique</UI.Link> ultrices. Mauris lacus tellus, faucibus placerat malesuada vel, vehicula nec felis. Nam a elementum risus, vitae accumsan urna. Morbi eros dui, sagittis quis mauris sed, pretium sodales eros. Proin tincidunt nibh vel augue egestas euismod.
        </UI.Paragraph.Primary>

        <table>
          <tr>
            <td style={{ paddingRight: '20px' }}>
              <UI.TextLabel margins>
                Name
              </UI.TextLabel>
              <UI.Paragraph.Primary margins>
                John Doe
              </UI.Paragraph.Primary>
            </td>
            <td style={{ paddingRight: '20px' }}>
              <UI.TextLabel margins>
                City
              </UI.TextLabel>
              <UI.Paragraph.Primary margins>
                Stockholm
              </UI.Paragraph.Primary>
            </td>
          </tr>
        </table>

        <UI.Button.Secondary className={styles.left}>
          Go back
        </UI.Button.Secondary>

        <UI.Button.Primary>
          Continue
        </UI.Button.Primary>
      </UI.Block.Content>
    </Screen>
  )
}
