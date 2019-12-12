import React from 'react'
import { Provider } from 'react-redux'
import store from './config/store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PublicPage from './views/PublicPage'
import PrivatePage from './views/PrivatePage'
import PrivateRouteContainer from './containers/PrivateRoute/PrivateRoute.container'
import LoginPage from './views/LoginPage'
import EpisodePage from './views/EpisodePage'
import CharacterPage from './views/CharacterPage'
import ButtonAppBar from './components/NavBar/ButtonAppBar'
import { CssBaseline } from '@material-ui/core'

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router basename='/desafiolatam-agenda'>
        <ButtonAppBar />
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/public' component={PublicPage} />
          <PrivateRouteContainer exact path='/private' component={PrivatePage} />
          <Route exact path='/episode' component={EpisodePage} />
          <Route exact path='/character' component={CharacterPage} />
          <Route exact path='/403' render={() => <div>403</div>} />
          <Route path='*' render={() => <div>404</div>} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
