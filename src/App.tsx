import { History } from 'history'
import * as React from 'react'
import { Provider, Store } from 'react-redux'
import { PlainRoute } from 'react-router'
import {
  Router,
  } from 'react-router'

export interface IAppProps {
  readonly routes: PlainRoute
  readonly history: History
  // tslint:disable-next-line:no-any
  readonly store: Store<any>
}

export default class App extends React.Component<IAppProps> {
  public render(): JSX.Element {
    const { routes, history, store } = this.props
    return (
      <Provider store={store}>
        <Router history={history}>
        {routes}
        </Router>
      </Provider>)
  }
}
