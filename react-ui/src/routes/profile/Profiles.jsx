import React, { useState, useEffect } from "react";


const Profiles = () => {
  const [profile, setProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/api/mentors`,
      {
        method: "GET",
        headers: new Headers({
        })
      }
    )
      .then(res => res.json())
      .then(res => {
        setProfile(res.items);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  },);

  return (
    <>
          {isLoading && <p>Wait I'm Loading comments for you</p>}

    </>
  )}

export default Profiles