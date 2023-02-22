import { useEffect, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useFetch } from "./hooks/hooks";
import json from './json/staff.json'

function App() {
  const data = useFetch("https://jsonplaceholder.typicode.com/posts/10");

  function createPost() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 10,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  const asynFunc= async ()=>{
    const response = await fetch('/src/json/staff.json')
    const data=await response.json()
    console.log(data,"++++")
  }

  const sendFormData=()=>{
    const formData=new FormData()
    formData.append('username','mubeess')
    formData.append('age',3)

    for (const key of formData.values()) {
      console.log(key,"+++++")
    }
    
  }
  useEffect(() => {
    // console.log(json,"+++++===");
    // createPost();
    // asynFunc()
    // sendFormData()
  }, []);
  return (
    <div className="App">
      <div>{data && data.id}
      <img src="chair.jpg"/>
      </div>
    </div>
  );
}

export default App;
