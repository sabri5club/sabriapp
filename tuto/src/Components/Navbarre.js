import React, { Component } from 'react'
import { Row, Col, Container, Button, Form, InputGroup, FormControl , Navbar, Nav, NavItem} from 'react-bootstrap';
import { FaUser } from 'react-icons/fa'
import { NavLink } from 'react-router-dom' ;

export default class Navbarre extends Component {
    render() {
        return (
            <div>
 <Navbar bg="dark" variant="dark">

    <Navbar.Brand href="/">Amana
    </Navbar.Brand>
    <Nav >
 
           <NavLink className="menu1"to="/Colis">Envoyer Colis</NavLink>

   
       <NavLink className="menu1" to="/">Transporter</NavLink>
       
    
       </Nav>
  
    <Nav pullRight className="ml-auto">
      <NavLink className="menu1" to="/Inscription">Inscription</NavLink>
      <NavLink className="menu1" to="/Connexion">Connexion</NavLink>
      <FaUser />
    </Nav>
    
   
  </Navbar>
 
            </div>
        )
    }
}
