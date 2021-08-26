import Cards from "./Cards"
import { Button } from "react-bootstrap"
import React from "react"


const Findmentor = () => {
  const [selectedSkills, setSelectedSkills] = React.useState([])

  const cardsArray= [
  {title:"Soft Skills", description: "Soft skills are non-technical skills that relate to how you work. They include how you interact with colleagues, solve problems, and manage your work."},
  {title:"Hard Skills", description: "Hard skills are teachable and measurable abilities, such as writing, reading, math or ability to use computer programs."},
  {title:"Life Skills", description: "Life skills are abilities for adaptive and positive behaviour that enable humans to deal effectively with the demands and challenges of life."},
  ]

    return (
      <div style={{textAlign:'center'}}>
    <div style={{display:"flex", justifyContent:"space-evenly", flexWrap: 'Wrap', padding: '10px'}}>
      {cardsArray.map((card)=>
        <Cards title={card.title} description={card.description} setSelectedSkills={setSelectedSkills} selectedSkills={selectedSkills}/>
      )} 
    </div>
    <Button disabled={selectedSkills.length ? false : true} variant="secondary" size="lg" style={{marginTop: '20px'}}>
      Next
    </Button>
    </div>
    )
}

export default Findmentor