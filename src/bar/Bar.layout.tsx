import * as React from 'react'
import { BarContainer } from './Bar.container'
export interface IBarLayoutProps {
  readonly children: JSX.Element
}

export default class BarLayout extends React.Component<IBarLayoutProps> {
  public render(): JSX.Element | null {
    console.log('hello')
    return (
    <div>
      Bar Layout nothing matters
      <BarContainer />
    </div>
    )
  }
}
