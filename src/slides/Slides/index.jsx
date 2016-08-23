import React from 'react'
import * as Menu from '@klarna/ui/Menu'
import * as August from './August'
import * as Dialog from './Dialog'
import Introduction from './Introduction'
import Text from './Text'

import Screen from 'Screen'
import * as Title from '@klarna/ui/Title'

import styles from './styles.css'

export default React.createClass({
  getInitialState () {
    return { currentSlide: 'introduction' }
  },

  render () {
    const { currentSlide } = this.state

    const slides = {
      introduction: <Introduction />,
      react: (
        <Screen>
          <Title.Primary>
            {'<React />'}
          </Title.Primary>
        </Screen>
      ),
      august1: <August.first />,
      august2: <August.second />,
      august3: <August.third />,
      text: <Text />,
      dialog1: <Dialog.first />
    }

    return (
      <main>
        <Menu.Tab
          className={styles.menu}
          onChange={(key) => this.setState({ currentSlide: key })}
          value={currentSlide}
          options={[
            { key: 'introduction', label: 'Introduction' },
            { key: 'react', label: 'React' },
            { key: 'august1', label: 'August #1' },
            { key: 'august2', label: 'August #2' },
            { key: 'august3', label: 'August #3' },
            { key: 'text', label: 'Text' },
            { key: 'dialog1', label: 'Dialog #1' }
          ]}
        />
        {slides[currentSlide]}
      </main>
    )
  }
})
