import Cards from "./Cards"
import { Button } from "react-bootstrap"
import React from "react"


const Findmentor = () => {
  const [selectedSkills, setSelectedSkills] = React.useState([])
    console.log(selectedSkills)
  const cardsArray= [
  {title:"Soft Skills", slug: "soft_skills", description: "Soft skills are non-technical skills that relate to how you work. They include how you interact with colleagues, solve problems, and manage your work."},
  {title:"Hard Skills", slug: "hard_skills", description: "Hard skills are teachable and measurable abilities, such as writing, reading, math or ability to use computer programs."},
  {title:"Life Skills", slug: "life_skills", description: "Life skills are abilities for adaptive and positive behaviour that enable humans to deal effectively with the demands and challenges of life."},
  ]
  const searchPeople = (skills) => {
    console.log(skills)
    fetch(`http://localhost:8080/api/mentors/${skills}`)
    .then(res=>res.json())
    .then((data) => {
      console.log(data);
        return data
    })
  }
    return (
      <div style={{textAlign:'center'}}>
    <div style={{display:"flex", justifyContent:"space-evenly", flexWrap: 'Wrap', padding: '10px'}}>
      {cardsArray.map((card)=>
        <Cards slug={card.slug} title={card.title} description={card.description} setSelectedSkills={setSelectedSkills} selectedSkills={selectedSkills} onClick={searchPeople}/>
      )} 
    </div>
    <Button onClick={()=> searchPeople(selectedSkills)} disabled={selectedSkills.length ? false : true} variant="secondary" size="lg" style={{marginTop: '20px'}}>
      Next
    </Button>
    </div>
    )
}

export default Findmentor