import { Action, createAction, handleActions } from 'redux-actions'

export interface IComplexObject {
  readonly id: number,
  readonly name: string,
  readonly items: ReadonlyArray<number>,
}

export interface IBarState {
  readonly count: number,
  readonly message: string,
  readonly isFinished: boolean | null
  readonly complexObject: IComplexObject | null,
}

export const BAR_DEFAULT_STATE: IBarState = {
  count: 123,
  message: 'hello lol',
  isFinished: true,
  complexObject: null
}

export enum TypeKeys {
  SET_COUNT = 'SET_COUNT',
  ADD_BALANCE = 'ADD_BALANCE',
  SET_IS_FROZEN = 'SET_IS_FROZEN',
}

export const setName = createAction<{ readonly isDefined: boolean, readonly something: number }, number>
  (TypeKeys.SET_COUNT, (something: number) => ({
    isDefined: false,
    something,
  }))

const asdf = {
  [TypeKeys.SET_COUNT]: (state: IBarState, action: Action<{ isDefined: boolean, something: number }>): IBarState => {
    if (action.payload == null) {
      return { ...state }
    }

    const idunnowhatever = {
      id: 123,
      items: [1234, 1234],
      name: 'hello'
    }
    return { ...state, count: action.payload.something, complexObject: idunnowhatever }
  },
}

export default handleActions(asdf, BAR_DEFAULT_STATE)
