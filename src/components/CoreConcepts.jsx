import React from "react";
import { DifferentContents } from "../data2";

function Propss({ ...DifferentContents }) {
  /* const destruct = { ...DifferentContents };
  const { attr1,  attr2, attr3, attr5 } = destruct; */
  const { attr1, attr2, attr3, attr5 } = { ...DifferentContents };
  return (
    <div>
      <p>{attr1}</p>
      {attr2.map((item) => (
        <p style={{ display: "inline" }} key={item}>
          {item + " "}
        </p>
      ))}
      <p>{attr3.PropertyName1}</p>
      <button onClick={attr5}>log "Method"</button>
    </div>
  );
}

const CoreConcepts = ({ image, title, description }) => {
  return (
    <li>
      <img src={image} alt="img" />
      <h2>{title}</h2>
      <p>{description}</p>
      <Propss {...DifferentContents} />
    </li>
  );
};

export default CoreConcepts;
