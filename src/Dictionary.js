import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
  }
  function handleResponse(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  function showResponse(response) {
    console.log(response.data);
  }

  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiUrl).then(showResponse);

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onClick={handleResponse} />
      </form>
    </div>
  );
}
