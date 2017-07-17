import ContactRoute from 'routes/Contact'

describe('(Route) Contact', () => {
  it('returns a route configuration object', () => {
    expect(typeof ContactRoute({})).to.equal('object')
  })

  it('has a path \'contact\'', () => {
    expect(ContactRoute({}).path).to.equal('contact')
  })
})
