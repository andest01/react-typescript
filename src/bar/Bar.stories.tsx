import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { SomethingDumb } from './Bar.component'

const stories = storiesOf('Commons', module)
stories.add('default button', () => {
  const settings = {
    twentyTwoTitleYes: '?',
    callback: () => {action('hello')},
  }

  return (
    <div style={{ width: '640px' }}>
      <SomethingDumb {...settings} />
    </div>)
})
