import React from 'react'
import { render } from 'react-dom'
import { Content } from '@klarna/ui/Block'
import * as Button from '@klarna/ui/Button'
import Subtitle from '@klarna/ui/Subtitle'
import UncontrolledField from '@klarna/ui/uncontrolled/Field'
import UncontrolledDropdown from '@klarna/ui/uncontrolled/Dropdown'
import Fieldset from '@klarna/ui/Fieldset'
import * as UncontrolledSwitch from '@klarna/ui/uncontrolled/Switch'
import UncontrolledInstallments from '@klarna/ui/uncontrolled/Installments'

render(
  <Content>
    <form>
      <Subtitle>Who are you?</Subtitle>

      <Fieldset margins>
        <UncontrolledField
          name='first-name'
          label='First name'
          size='1/2'
          left
          top
        />
        <UncontrolledField
          name='last-name'
          label='Last name'
          size='1/2'
          right
          top
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

      <Button.Primary>Submit</Button.Primary>
    </form>
  </Content>,
  document.getElementById('konferense2016')
)
