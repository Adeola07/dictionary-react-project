import React, { useState } from "react";
import "./App.css";

import axios from "axios";
import Result from "./Result";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [result, setResult] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    setResult(response.data[0]);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function load() {
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  onChange={handleKeyword}
                  className="form-control"
                  placeholder="Enter word here..."
                  autoFocus="on"
                />
              </div>
            </div>
          </form>
        </section>
        <Result result={result} />
      </div>
    );
  } else {
    load();
  }
}
