import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'experience',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Experience = require('./containers/ExperienceContainer').default
      const reducer = require('./modules/experience').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'experience', reducer })

      /*  Return getComponent   */
      cb(null, Experience)

    /* Webpack named bundle   */
    }, 'experience')
  }
})
