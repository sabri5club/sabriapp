import React, { Component } from 'react';
import { Row, Col, Container, Button, Form, InputGroup, FormControl , Navbar} from 'react-bootstrap';


        const Movie = ({name, price, id}) => {
        return (
            <div>
    
  

<Container>
    <Row>
        <Col>
                <h3>Nom du film : {name} </h3>
                </Col>
                <Col>
                <h3>Prix : {price}</h3>
               </Col>
               <Col>
                <h3>Numéro id : {id}</h3>
                </Col>
                </Row>
                </Container>
            </div>
           
        );
    };

    export default Movie ;
