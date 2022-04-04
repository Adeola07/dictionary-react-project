import React, { useState } from "react";
import "./App.css";
export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  function search(event) {
    alert("Searching");
  }
  function handleResponse(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onClick={handleResponse} />
      </form>
    </div>
  );
}
