import * as React from 'react'

export interface IBarLayoutProps {
  readonly children: JSX.Element
}

export default class BarLayout extends React.Component<IBarLayoutProps> {
  public render(): JSX.Element | null {
    console.log('hello')
    return <div>Bar Layout nothing matters</div>
  }
}
