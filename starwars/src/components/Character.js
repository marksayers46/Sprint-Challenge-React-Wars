import React from "react";
import { Card, CardBody, CardTitle, CardText, Col } from "reactstrap";

export default function Character(props) {
   
    
    return (           
        <Col xs="6" md="4">
           
              <Card body inverse style={{ backgroundColor: 'white', borderColor: 'black' }}>          
                <CardBody>
                  <CardTitle>{props.person.name}</CardTitle>
                  <CardText>Height: {props.person.height}</CardText>
                  <CardText>Mass: {props.person.mass}</CardText>
                  <CardText>Skin Color: {props.person.skin_color}</CardText>
                </CardBody>
              </Card>
            
        </Col>
    );
  }
