import React, { useEffect, useState } from "react";
import Axios from "axios";
import Characters from "./Character";
import { Container, Row } from "reactstrap";


export default function CharacterList() {
    const [actor, setActor] = useState([]);
    useEffect(() => {
        Axios
          .get("https://swapi.py4e.com/api/people")
          .then(res => {
            setActor(res.data.results);
            console.log(res.data);
          })
          .catch(err => console.log("Error", err));
      }, []);
  

      return (
        <Container>       
          <Row >
            {actor.map(person => {
              return <Characters person={person}/>;
            })}
          </Row>
        </Container>
      )};
