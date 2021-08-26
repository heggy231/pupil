import { Card, Button } from "react-bootstrap";
import React from "react";
import "./cards.css"

const Cards = ({title,description,select}) => {
  const [selected, setSelected] = React.useState(false)

const handleClick = () => {
  setSelected(!selected)
}

    return (
    <Card className='card' style={{ width: '18rem', textAlign: 'center', padding: '20px', marginTop: '20px'}}>
  <Card.Img variant="top" />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text style= {{textAlign:"center"}}>
      {description}
    </Card.Text>
    <Button onClick={handleClick} variant="primary">{selected ? 'Selected' : 'Select'}</Button>
  </Card.Body>
</Card>
    )
}


export default Cards