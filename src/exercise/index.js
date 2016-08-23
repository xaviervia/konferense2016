import React from 'react'
import { render } from 'react-dom'
import { Content } from '@klarna/ui/Block'
import * as Button from '@klarna/ui/Button'
import Subtitle from '@klarna/ui/Subtitle'
import UncontrolledField from '@klarna/ui/uncontrolled/Field'
import UncontrolledInput from '@klarna/ui/uncontrolled/Input'
import UncontrolledDropdown from '@klarna/ui/uncontrolled/Dropdown'
import Fieldset from '@klarna/ui/Fieldset'
import * as UncontrolledSwitch from '@klarna/ui/uncontrolled/Switch'
import UncontrolledInstallments from '@klarna/ui/uncontrolled/Installments'
import * as Title from '@klarna/ui/Title'
import * as Paragraph from '@klarna/ui/Paragraph'
import * as UncontrolledMenu from '@klarna/ui/uncontrolled/Menu'

render(
  <Content>
    <Title.Primary margins color='blue'>
      Klarna UI Components form
    </Title.Primary>

    <form>
      <Subtitle>Who are you?</Subtitle>

      <Fieldset margins>
        <UncontrolledField
          name='first-name'
          label='First name'
          size='1/2'
          top left
        />
        <UncontrolledField
          name='last-name'
          label='Last name'
          size='1/2'
          top right
        />
        <UncontrolledDropdown
          bottom
          name='planet'
          label='Planet'
          options={[
            { key: '', label: 'Pick one', disabled: true, hidden: true },
            { key: 'earth', label: 'Earth' },
            { key: 'mars', label: 'Mars' }
          ]}
        />
      </Fieldset>

      <Fieldset margins>
        <UncontrolledSwitch.Toggle name='agreed'>
          Do you agree with the terms?
        </UncontrolledSwitch.Toggle>
      </Fieldset>

      <Fieldset margins>
        <UncontrolledInstallments
          name='installments'
          label='How do you want to pay?'
          options={[
            { key: '4', value: '4€ ', connector: 'for', info: ' 3 month' },
            { key: '3', value: '3€ ', connector: 'for', info: ' 4 month' },
            { key: '2', value: '2€ ', connector: 'for', info: ' 6 month' }
          ]}
        />
      </Fieldset>

      <Fieldset margins>
        <UncontrolledSwitch.Checkbox name='pretty' value>
          Check if you think the form looks pretty
        </UncontrolledSwitch.Checkbox>
      </Fieldset>

      <Subtitle margins>In here enter your card details †</Subtitle>
      <UncontrolledMenu.Tab
        name='card-type'
        options={[
          { key: 'visa', label: 'Visa' },
          { key: 'master', label: 'Mastercard' }
        ]}
      />
      <Fieldset margins>
        <UncontrolledInput
          name='card-number'
          label='Card number'
          icon='card'
          type='tel'
        />
        <UncontrolledInput
          name='card-expiration'
          left
          icon='calendar'
          label='MM / YY'
          size='1/2'
        />
        <UncontrolledInput
          name='card-ccv'
          right
          icon='lock'
          label='CCV'
          size='1/2'
        />
      </Fieldset>
      <Paragraph.Legal margins>
        † Please don't enter your real card details
      </Paragraph.Legal>

      <Subtitle margins>Choose the delivery type</Subtitle>
      <Fieldset margins>
        <UncontrolledMenu.Segmented
          name='delivery-method'
          options={[
            { key: 'regular', label: 'Regular' },
            { key: 'express', label: 'Express' },
            { key: 'overnight', label: 'Overnight' }
          ]}
        />
      </Fieldset>

      <Button.Primary>Submit</Button.Primary>
    </form>
  </Content>,
  document.getElementById('konferense2016-exercise')
)
