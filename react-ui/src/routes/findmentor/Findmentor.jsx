import Cards from "./Cards"


const Findmentor = () => {
  const cardsArray= [{title:"soft skills", description: "helllo", select: "select"},{title:"hard skills", description: "helllo", select: "select"},{title:"life skills", description: "helllo", select: "select"},]

    return (
    <div style={{display:"flex", justifyContent:"space-evenly"}}>
      {cardsArray.map((card)=>
        <Cards title={card.title} description={card.description} select={card.select}/>
      )}
    </div>
    )
}

export default Findmentor