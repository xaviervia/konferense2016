import React from 'react'
import { render } from 'react-dom'
import { Content } from '@klarna/ui/Block'
import GistEmbed from 'react-gist-embed'

render(
  <div>
    <Content>
      <GistEmbed gistId='6a1957e0609cbc9f28a9277935d91f49' />
    </Content>
  </div>
  , document.getElementById('konferense2016-code')
)
