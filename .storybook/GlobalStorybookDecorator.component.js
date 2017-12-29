import React from 'react'

const StorybookGlobalDecoratorComponent = (storyFn) => (
  <div style={{ height: '100%' }} id="storybookRoot" >
    { storyFn() }
  </div>
)

export default StorybookGlobalDecoratorComponent
