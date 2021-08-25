import { Card, Button } from "react-bootstrap";
import React from "react";

const Cards = ({title,description,select}) => {
    console.log(title)
    return (
    <Card style={{ width: '18rem', textAlign: 'center' }}>
  <Card.Img variant="top" />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text style= {{textAlign:"center"}}>
      {description}
    </Card.Text>
    <Button variant="primary">{select}</Button>
  </Card.Body>
</Card>
    )
}

export default Cards