import { configure, addDecorator } from '@storybook/react'

const req = require.context('../src', true, /.stories.tsx$/)
function loadStories() {
  req
    .keys()
    .sort()
    .forEach(req)
}

configure(loadStories, module)
