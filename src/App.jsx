import { useEffect, useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useFetch } from "./hooks/hooks";

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
  useEffect(() => {
    console.log(data);
    createPost();
  }, []);
  return (
    <div className="App">
      <div>{data && data.id}</div>
    </div>
  );
}

export default App;
