import React, { useState, useEffect } from "react";
// import { mentors } from "../mentors"


const Profiles = (props) => {
  const [profile, setProfile] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/profiles/${props.match.params.id}`,
      {
        method: "GET",
      }
    ).then(res => res.json())
      .then(res => {
        console.log(res)
        setProfile(res.items);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  },);
  console.log(props.match.params.id)
  return (

    <>
          {isLoading && <p>Almost done loading .. </p>}

    </>
  )}

export default Profiles