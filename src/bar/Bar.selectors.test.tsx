// import * as selectors from './Bar.selectors'

describe('UsMap.selectors', () => {
  // tslint:disable-next-line:no-let
  let reduxState = {}
  beforeEach(() => {
    reduxState = {
      routing: {
        location: {},
        params: {
          year: '2016',
          race: 'PRES',
          usState: 'MN',
          usFips: '1234',
        },
      },
    }
  })

  it('removes the fips code from admin 2 view', () => {
    // arrange

    // act
    // selectors.getComplexObject(reduxState)
    // assert
    debugger
    expect(reduxState).toBe(1)
  })
})
