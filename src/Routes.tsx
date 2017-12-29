import { PlainRoute } from 'react-router'
import AppLayout from './App.layout'
import BarLayout from './bar/Bar.layout'
import FooLayout from './foo/Foo.layout'
export const createRoutes = (store = null): PlainRoute => ({
  path: '/',
  component: AppLayout,
  indexRoute: {
  component: AppLayout
  },
  childRoutes: [
  {
    path: '/foo',
    component: FooLayout,
  },
  {
    path: '/bar',
    component: BarLayout,
  }
  ],
})

export default createRoutes
