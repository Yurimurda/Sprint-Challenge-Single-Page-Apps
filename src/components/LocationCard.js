import React from "react";
import { Card, CardText, CardBody, CardTitle, Col, CardImg } from 'reactstrap';
import styled from "styled-components";

const Titles = styled(CardTitle)`
color: brown;
font-size: 2rem;
`;

const Cards = styled(Card)`
background-color: darkgrey !important;
`;
const LocationCard = props => {
  return (<Col xs="12" s="6" md="4" key={props.id}>
  <Cards className="m-2" outline color="warning">
      <CardBody>
<Titles>{props.name}</Titles>
<CardText>Type: {props.type}</CardText>
<CardText>Dimension: {props.dimension}</CardText>
{/* <CardText>Gender: {props.gender}</CardText> */}
{/* <CardImg>Created: {props.src}</CardImg> */}
</CardBody>
</Cards>
</Col>);
};


export default LocationCard
