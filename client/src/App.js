import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './containers/HomePage/HomePage';
import SelectRestaurantPage from './containers/SelectRestaurantPage/SelectRestaurantPage';
import TournamentPage from './containers/TournamentPage/TournamentPage';
import WaitingPage from './containers/WaitingPage/WaitingPage';
import WinnerPage from './containers/WinnerPage/WinnerPage';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
      <BrowserRouter>
        <Switch>
          <Route path="/room/:roomId/select-restaurant/waiting" component={WaitingPage}/>
          <Route path="/room/:roomId/:playerId/select-restaurant" exact component={SelectRestaurantPage}/>
          <Route path="/room/:roomId/:playerId/tournament" exact component={TournamentPage}/>
          <Route path="/room/:roomId/winner" component={WinnerPage}/>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
