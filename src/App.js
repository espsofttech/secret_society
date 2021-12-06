import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React, { component } from 'react';
import config from './config/config';
import Home from './Components/Home'
import Team from './Components/Team'
import Provenance from './Components/Provenance'
import Marketplace from './Components/Marketplace'
import Term_condition from './Components/Term_condition'

function App() {
  return (
    <BrowserRouter>
    
        <Switch>
          
        <Route path={`${config.baseUrl}`} exact component={Home} />
        <Route path={`${config.baseUrl}Team`} exact component={Team} />
        <Route path={`${config.baseUrl}Provenance`} exact component={Provenance} />
        <Route path={`${config.baseUrl}Marketplace`} exact component={Marketplace} />
        <Route path={`${config.baseUrl}Term_condition`} exact component={Term_condition} />
        </Switch>
    
    </BrowserRouter>
  );
}

export default App;
