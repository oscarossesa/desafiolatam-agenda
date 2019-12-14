import React from 'react'
import { Provider } from 'react-redux'
import store from './config/store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PrivateRouteContainer from './containers/PrivateRoute/PrivateRoute.container'
import LoginPage from './views/LoginPage'
import EpisodePage from './views/EpisodePage'
import CharacterPage from './views/CharacterPage'
import HomePage from './views/HomePage'
import ButtonAppBar from './components/NavBar/ButtonAppBar'
import { CssBaseline } from '@material-ui/core'

const App = () => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router basename='/desafiolatam-agenda'>
        <ButtonAppBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          <PrivateRouteContainer exact path='/episode' component={EpisodePage} />
          <PrivateRouteContainer exact path='/character' component={CharacterPage} />
          <Route exact path='/403' render={() => <div>403</div>} />
          <Route path='*' render={() => <div>404</div>} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
