import * as React from 'react'
const bar =  require('./bar.png')
const styles = require('./Bar.scss')

export interface IPropertyButton {
  readonly twentyTwoTitleYes: string
  readonly className?: string
  readonly callback: () =>  void | undefined
}

export class SomethingDumb extends React.Component<IPropertyButton> {
  public render(): JSX.Element | { } {
    const settings = this.props
    const className = styles.stuff

    return (
      <button className={className} type="button" onClick={this.onClickHandler}>
        <img src={bar} />
        {settings.twentyTwoTitleYes}
      </button>
    )
  }

  private readonly onClickHandler = () => {
    if (this.props.callback !== undefined) {
      this.props.callback()
    }
  }
}
