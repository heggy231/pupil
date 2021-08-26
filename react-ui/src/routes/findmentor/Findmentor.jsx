import Cards from "./Cards"
import { Button } from "react-bootstrap"


const Findmentor = () => {
  const cardsArray= [
  {title:"Soft Skills", description: "Soft skills are non-technical skills that relate to how you work. They include how you interact with colleagues, solve problems, and manage your work.", select: "select"},
  {title:"Hard Skills", description: "Hard skills are teachable and measurable abilities, such as writing, reading, math or ability to use computer programs.", select: "select"},
  {title:"Life Skills", description: "Life skills are abilities for adaptive and positive behaviour that enable humans to deal effectively with the demands and challenges of life.", select: "select"},
]

    return (
      <div style={{textAlign:'center'}}>
    <div style={{display:"flex", justifyContent:"space-evenly", flexWrap: 'Wrap', padding: '10px'}}>
      {cardsArray.map((card)=>
        <Cards title={card.title} description={card.description} select={card.select}/>
      )}
    </div>
      <Button variant="secondary" size="lg" style={{marginTop: '20px'}}>
      Next
    </Button>
    </div>
    )
}

export default Findmentor