import React, { Component } from 'react'
import { Row, Col, Container, Button, Form, InputGroup, FormControl , Navbar, } from 'react-bootstrap';

export default class Forms extends Component {
    render() {
        return (
            <div>
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
    <Form.Label>Adresse Email</Form.Label>
    <Form.Control type="email" placeholder="Entrer votre email" />
    <Form.Text className="text-muted">
     
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
