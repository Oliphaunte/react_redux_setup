import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Accessibility from '~/app/assets/js/accessibility'

const Header = React.lazy(() => import('~/app/views/components/layout/header'))
const Footer = React.lazy(() => import('~/app/views/components/layout/footer'))
const Home = React.lazy(() => import('~/app/views/pages/layout/home'))
const LoginPage = React.lazy(() => import('~/app/views/pages/auth/login'))
const Private = React.lazy(() => import('~/app/views/pages/private'))
const PrivateRoute = React.lazy(() => import('~/app/views/pages/layout/private_route'))
const Error404 = React.lazy(() => import('~/app/views/pages/errors/404'))

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    window.addEventListener('keydown', Accessibility.handleFirstTab)
  }

  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Header />

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={LoginPage} />
          <PrivateRoute path='/private' component={Private} />
          <Route path='' component={Error404} />
        </Switch>

        <Footer />
      </Suspense>
    )
  }
}

export default App
