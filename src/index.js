import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import store from './config/store'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PublicPage from './views/PublicPage'
import PrivatePage from './views/PrivatePage'
import PrivateRouteContainer from './containers/PrivateRoute/PrivateRoute.container'
import LoginPage from './views/LoginPage'
import EpisodePage from './views/EpisodePage'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/public' component={PublicPage} />
        <PrivateRouteContainer exact path='/private' component={PrivatePage} />
        <Route exact path='/episode' component={EpisodePage} />
        <Route path='*' render={() => <div>403</div> } />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
