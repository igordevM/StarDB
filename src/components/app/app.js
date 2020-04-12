import React from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';

import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from '../../services/swapi-service';

import './app.css';

import ErrorBoudry from '../error-boudry';
import Header from '../header';
import Main from '../main';
import RandomPlanet from '../random-planet';
import Login from '../pages/login';
import Secret from '../pages/secret';
 


export default class App extends React.Component {
  state = {
    isLogin: false
  };

  osLogin = () => {
    this.setState({
      isLogin: true
    });
  };


  render() {
    const swapiService = new SwapiService();

    return (
      <ErrorBoudry>
          
        <SwapiServiceProvider value={swapiService}>

          <Router>
            <div className="app">
                <div className="container">
                  <Header />

                  <RandomPlanet />
                  
                    <Switch>
                      <Route exact path='/' render={ () => (
                        <h2>Welcome to StarDB</h2>
                      )}/>
                      
                      <Route path='/people/:id?' render={ () => (
                        <Main page="people"/>
                      )}/>

                      <Route path='/planets/:id?' render={ () => (
                        <Main page="planets"/>
                      )}/>

                      <Route path='/starships/:id?' render={ () => (
                        <Main page="starships"/>
                      )}/>

                      <Route path='/login' render={() => (
                        <Login onLogin={this.osLogin} isLogin={this.state.isLogin}/>
                      )}/>

                      <Route path='/secret' render={() => (
                        <Secret isLogin={this.state.isLogin}/>
                      )}/> 
                      
                      <Route path='/error' render={() => (
                        <h2>Error</h2>
                      )}/> 
                        
                      <Redirect to='/error' />
                    </Switch>
                  

                </div>       
            </div>
          </Router>   

        </SwapiServiceProvider>

      </ErrorBoudry>
    );
  };
};