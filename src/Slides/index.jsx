import React from 'react'
import * as Menu from '@klarna/ui/Menu'
import Introduction from './Introduction'
import WhyReact from './WhyReact'
import * as Step from './Step'
import styles from './styles.css'

export default React.createClass({
  getInitialState () {
    return { currentSlide: 'introduction' }
  },

  render () {
    const { currentSlide } = this.state

    const slides = {
      introduction: <Introduction />,
      whyReact: <WhyReact />,
      step1: <Step.first />,
      step2: <Step.second />,
      step3: <Step.third />,
      step4: <Step.fourth />,
      step5: <Step.fifth />,
      step6: <Step.sixth />
    }

    return (
      <main>
        <Menu.Tab
          className={styles.menu}
          onChange={(key) => this.setState({ currentSlide: key })}
          value={currentSlide}
          options={[
            { key: 'introduction', label: 'Introduction' },
            { key: 'whyReact', label: 'Why React?' },
            { key: 'step1', label: 'Step #1' },
            { key: 'step2', label: 'Step #2' },
            { key: 'step3', label: 'Step #3' },
            { key: 'step4', label: 'Step #4' },
            { key: 'step5', label: 'Step #5' },
            { key: 'step6', label: 'Step #6' }
          ]}
        />
        {slides[currentSlide]}
      </main>
    )
  }
})
