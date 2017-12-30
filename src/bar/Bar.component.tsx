import * as React from 'react'
const bar =  require('./bar.png')
const styles = require('./Bar.scss')

export interface IStateProps {
  readonly hahaNobodyCaresMoby: string
  readonly className?: string
}

// tslint:disable-next-line:interface-over-type-literal
export interface IDispatchProps {
  // tslint:disable-next-line:no-any
  readonly callback: () =>  any
}

export interface ISomethingDumbProps extends IStateProps, IDispatchProps { }

export class SomethingDumb extends React.Component<ISomethingDumbProps> {
  public render(): JSX.Element | { } {
    const settings = this.props
    const className = styles.stuff
    return (
      <button className={className} type="button" onClick={this.onClickHandler}>
        <img src={bar} />
        {settings.hahaNobodyCaresMoby}
      </button>
    )
  }

  private readonly onClickHandler = () => {
    if (this.props.callback !== undefined) {
      this.props.callback()
    }
  }
}
