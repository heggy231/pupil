import React, { useState, useEffect } from "react";

const Skilltypes = (props) => {
  const [skilltype, setSkilltype] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/skilltypes/${props.match.params.type}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("res is profile/id !!!!!", res);
        
        setSkilltype(res);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [props.match.params.type]);
  console.log(props.match.params.id);

  
  return (
    <>
      {isLoading ? 
      (<div>Loading...</div>) : (
     <div> 
      <p>{skilltype}</p>

     </div>
      
       )}
    </>
  );
};

export default Skilltypes;