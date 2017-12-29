import { combineReducers } from 'redux'
import bar, { IBarState } from './bar/Bar.redux'
import foo, { IFooState } from './foo/Foo.redux'

export interface IState {
  readonly bar: IBarState,
  readonly foo: IFooState,
}

export default combineReducers<IState>({
  bar,
  foo,
})
