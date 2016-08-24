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
import * as Dialog from '@klarna/ui/Dialog'
import { Close } from '@klarna/ui/IconButton'
import Fieldset from '@klarna/ui/Fieldset'
import UncontrolledField from '@klarna/ui/uncontrolled/Field'
import UncontrolledDropdown from '@klarna/ui/uncontrolled/Dropdown'
import * as UncontrolledSwitch from '@klarna/ui/uncontrolled/Switch'

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

export default React.createClass({
  getInitialState () {
    return { open: 'initial' }
  },

  render () {
    const { open } = this.state

    return (
      <div>
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

            <Button.Primary onClick={() => this.setState({ open: true })}>
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

        <form>
          <Dialog.Overlay show={open}>
            <Dialog.Main>
              <Dialog.Icon>
                <Close onClick={() => this.setState({ open: false })} />
              </Dialog.Icon>

              <Dialog.Content>
                <Title.Primary className={styles.dialogTitle} margins>
                  Let's start
                </Title.Primary>

                <Subtitle margins>
                  Who are you?
                </Subtitle>

                <Fieldset margins>
                  <UncontrolledField
                    left top size='1/2'
                    name='given-name'
                    label='Given name'
                  />
                  <UncontrolledField
                    right top size='1/2'
                    name='last-name'
                    label='Last name'
                  />
                  <UncontrolledDropdown
                    bottom
                    name='planet'
                    label='Which planet?'
                    options={[
                      { key: '', label: 'Pick one', disabled: true, hidden: true },
                      { key: 'earth', label: 'Earth' },
                      { key: 'mars', label: 'Mars' }
                    ]}
                  />
                </Fieldset>

                <Fieldset margins>
                  <UncontrolledSwitch.Checkbox name='agreed'>
                    Do you agree with the terms?
                  </UncontrolledSwitch.Checkbox>
                </Fieldset>
              </Dialog.Content>

              <Dialog.Footer>
                <Button.Primary className={styles.dialogButton}>
                  Complete
                </Button.Primary>
              </Dialog.Footer>
            </Dialog.Main>
          </Dialog.Overlay>
        </form>
      </div>
    )
  }
})
