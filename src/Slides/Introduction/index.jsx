import React from 'react'
import Screen from 'Screen'
import * as Title from '@klarna/ui/Title'
import * as Paragraph from '@klarna/ui/Paragraph'

export default function Buttons () {
  return (
    <Screen>
      <div>
        <Title.Primary margins>@klarna/ui components</Title.Primary>
        <Paragraph.Primary margins>Join #ui-workshop</Paragraph.Primary>
      </div>
    </Screen>
  )
}
