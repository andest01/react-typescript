import * as React from 'react'

export interface IFooLayoutProps {
  readonly children: JSX.Element
}

export default class FooLayout extends React.Component<IFooLayoutProps> {
  public render(): JSX.Element | null {
    return (
    <div>
      <div>Foo Layout Who Cares</div>
      {this.props.children}
    </div>)
  }
}
