import React, { Component } from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import { Row, Col, Container, Button } from 'react-bootstrap';
import Navbarre from './Components/Navbarre';
import Forms from './Components/Forms';
import Connexion from './Components/Connexion'
import Inscription from './Components/Inscription'
import Colis from './Components/Colis'
import { FaUser } from 'react-icons/fa';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <Router>
      <div>

     
        <Navbarre></Navbarre>


        
        <Switch>
         <Route path="/Colis" component={Colis}></Route>
         <Route path="/MovieList" component={MovieList}></Route>
         <Route path="/Forms" component={Forms}></Route>
         <Route path="/Inscription" component={Inscription}></Route>
         <Route path="/Connexion" component={Connexion}></Route>
         </Switch>
      
      </div>
      </Router>
    )
  }
}
