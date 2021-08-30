import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap"
import {Link} from "react-router-dom"

const Skilltypes = (props) => {
  const { skill, skillTitle } = props
  console.log(skill)
  const [isLoading, setIsLoading] = useState(true);
  const [mentors, setMentors] = useState([])

  useEffect(() => {
    fetch(`/api/skilltypes/${skill}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
      console.log("res is profile/id !!!!!", res);
      setMentors(res)
      setIsLoading(false)
      })
      .catch((error) => console.log(error));
  }, [skill]);

  
  return (
    <>
      <h1>{skillTitle}</h1>

      {isLoading ? 
      (<div>Loading...</div>) : 


      mentors?.map((mentors) => {
        return (
          <>
          <div style= {{textAlign:'center', display: 'flex', justifyContent: 'space-evenly'}}>
           <Card style={{ width: '230px', margin:'20px' }}>
           <Card.Img variant="top" src="holder.js/100px180" />
           <Card.Body>
             <Card.Title>{mentors.firstName} {mentors.lastName}</Card.Title>
             <Card.Text>

             </Card.Text>
             <Link to= {`./profiles/${mentors.id}`} ><Button variant="dark">Select Mentor</Button></Link>
           </Card.Body>
         </Card>
         </div>
         </>
        )
       }
      )}
    </>
  );
};

export default Skilltypes;