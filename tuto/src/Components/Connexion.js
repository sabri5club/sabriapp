import React, { Component } from 'react'
import { Row, Col, Container, Button, Form, InputGroup, FormControl , Navbar, Jumbotron } from 'react-bootstrap';

export default class Connexion extends Component {
    render() {
        return (
            <div>
                <Container>
                <Jumbotron>
  <h1>Connexion</h1>
  <p>
  Bienvenue sur la plateforme Amana, Envoyer vos colis en toute sécurité sur notre plateforme
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
  
</Jumbotron>
</Container>
                        <Container>
                <Form>
                <Form.Group controlId="formBasicEmail">
    <Form.Label>Nom</Form.Label>
    <Form.Control type="text" placeholder="Entrer votre Nom" />
    <Form.Text className="text-muted">
  
    </Form.Text>
  </Form.Group>
             
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Prénom</Form.Label>
    <Form.Control type="text" placeholder="Entrer votre prénom" />
    <Form.Text className="text-muted">
  
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Entrer votre email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Mot de passe</Form.Label>
    <Form.Control type="password" placeholder="Entrez votre mot de passe" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="J'accepte les conditions d'utilisations du site Amana" />
  </Form.Group>
  <Button variant="primary" type="">
    Valider
  </Button>
</Form>
</Container>
                
            </div>
        )
    }
}
