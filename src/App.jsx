import React, { useState, useEffect } from "react";
import axios from "axios"

function App() {
  const [advice,setAdvice]=React.useState("")
  useEffect(()=>{
    fetchData
  },[])

  const fetchData=()=>{
    axios
    .get("https://api.adviceslip.com/advice")
    .then((response) => {
      // Assuming the advice is available in response.data.slip.advice
      const newAdvice = response.data.slip.advice;
      setAdvice(newAdvice);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  function getNewAdvice(){
    fetchData();
  };


  return (
    <>
        <div className="app-container">
          <div className="card">
          <p>{advice}</p>
        <button onClick={getNewAdvice}>Get New Advice</button>
          </div>
        </div>
    </>
  )
}

export default App
