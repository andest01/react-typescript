import * as React from 'react'

export interface ISomething {
  readonly children: JSX.Element
}

export default class AppLayout extends React.Component<ISomething> {
  public render(): JSX.Element | null {
    return (
    <div>
      <div>Container town</div>
      {this.props.children}
    </div>)
  }
}
