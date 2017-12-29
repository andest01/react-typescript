import { Action, createAction, handleActions } from 'redux-actions'

export interface IFooState {
  readonly usState: {
    readonly id: number,
    readonly name: string,
    readonly items: ReadonlyArray<number>,
  } | null,
}

export const FOO_DEFAULT_STATE: IFooState = {
  usState: null
}

export enum TypeKeys {
  DO_OTHER_THINGS = 'SET_COUNT',
}

export const doStuff = createAction
  <{readonly isDefined: boolean, readonly something: number}, number>
  (TypeKeys.DO_OTHER_THINGS, (something: number) => ({
  isDefined: false,
  something,
}))

const asdf = {
  [TypeKeys.DO_OTHER_THINGS]:
    (state: IFooState, action: Action<{isDefined: boolean, something: number}>): IFooState => {
    if (action.payload == null) {
      return { ...state }
    }

    const stuffAndThings = {
      id: 123,
      items: [1234, 1234],
      name: 'hello'
    }
    return { ...state, usState: stuffAndThings }
  }
}

export default handleActions(asdf, FOO_DEFAULT_STATE)
