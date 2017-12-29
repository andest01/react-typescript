import { createSelector } from 'reselect'
import { IState } from '../Store.redux.rootReducer'
import { IComplexObject } from './Bar.redux'

export const getComplexObject = (state: IState): IComplexObject | null => state.bar.complexObject

const EMPTY_ARRAY: ReadonlyArray<number> = []
export const getItems = createSelector(
  [getComplexObject],
  (obj): ReadonlyArray<number> => {
    if (obj == null) {
      return EMPTY_ARRAY
    }

    return obj.items
  }
)
