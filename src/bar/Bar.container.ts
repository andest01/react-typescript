import { connect } from 'react-redux'
import { IState } from '../Store.redux.rootReducer'
import { IDispatchProps, IStateProps, SomethingDumb } from './Bar.component'
import * as selectors from './Bar.selectors'

import { setName } from './Bar.redux'

export const mapStateToProps = (state: IState): IStateProps => {
  const asdf = selectors.getComplexObject(state)
  return {
    className: asdf == null ? '' : asdf.name,
    hahaNobodyCaresMoby: asdf == null ? '' : asdf.name
  }
}

export const mapDispatchToProps = {
  callback: () => setName(123)
}

export const BarContainer =
connect<IStateProps, IDispatchProps, void >(
  mapStateToProps,
  mapDispatchToProps)
  (SomethingDumb)
