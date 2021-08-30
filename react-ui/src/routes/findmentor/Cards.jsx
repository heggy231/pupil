import { Card, Button } from "react-bootstrap";
import React from "react";
import { useState } from "react"
import "./cards.css"


const Cards = ({slug, title, description, setSelectedSkills, setLoadCard, setSkillTitle}) => {
  const [selected, setSelected] = useState(false)

const handleClick = () => {
  if (!selected){
    setSelected(!selected)
    setSelectedSkills(slug)
    setSkillTitle(title)
    setLoadCard(false)
  } else {
    setSelected(!selected)
    setSelectedSkills("")
  }
}

    return (
<Card className='card' style={{ width: '18rem', textAlign: 'center', padding: '20px', marginTop: '20px'}}>
  <Card.Img variant="top" />
  <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text style= {{textAlign:"center"}}>
      {description}
    </Card.Text>
    <Button onClick={handleClick} variant="dark">{selected ? 'Selected' : 'Select'}</Button>
  </Card.Body>
</Card>
    )
}


export default Cards