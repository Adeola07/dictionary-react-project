import React from "react";
import Meaning from "./Meaning";
export default function Result(props) {
  console.log(props.result);
  if (props.result) {
    return (
      <div className="Result">
        <h2>{props.result.word}</h2>
        <p>
          {props.result.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}{" "}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
