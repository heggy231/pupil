import Cards from "./Cards"
import React, {useState}from "react"
import Skilltypes from "./Skilltypes"


const Findmentor = () => {
  const [selectedSkills, setSelectedSkills] = useState([])
  const [skillTitle, setSkillTitle] = useState("")
  console.log(selectedSkills)
  const [loadCard, setLoadCard] = useState(true)
  const cardsArray = [
    { title: "Soft Skills", slug: "soft_skills", description: "Soft skills are non-technical skills that relate to how you work. They include how you interact with colleagues, solve problems, and manage your work." },
    { title: "Hard Skills", slug: "hard_skills", description: "Hard skills are teachable and measurable abilities, such as writing, reading, math or ability to use computer programs." },
    { title: "Life Skills", slug: "life_skills", description: "Life skills are abilities for adaptive and positive behaviour that enable humans to deal effectively with the demands and challenges of life." },
  ]


  const searchPeople = (skills) => {
    console.log(skills)
    fetch(`/api/skilltypes/${skills}`)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        return data
      })
  }
  return (
    <div style={{ textAlign: 'center' }}>
      {loadCard ?
        <div style={{ display: "flex", justifyContent: "space-evenly", flexWrap: 'Wrap' }}>
        {cardsArray.map((card) =>
          <Cards slug={card.slug} title={card.title} description={card.description} setSelectedSkills={setSelectedSkills} setLoadCard={setLoadCard} setSkillTitle={setSkillTitle}/>
        )}
      
      </div>
        :  <Skilltypes skill={selectedSkills} skillTitle={skillTitle}/>
      }
    </div>

  )
}

export default Findmentor