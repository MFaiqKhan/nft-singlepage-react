import React from "react";
import CollectionCard from "./CollectionCard";
import "./Punklist.css";

const Punklist = ({ punkListData, setSelectedPunk }) => {
  return (
    <div className="punklist">      {/* https://stackoverflow.com/questions/28770415/ecmascript-6-arrow-function-that-returns-an-object */}
      {punkListData.map((punk) => ( //array.map => Array.prototype.map() expects a return value from arrow function  array-callback-return as round brackets 
        <div onClick={() => { setSelectedPunk(punk.token_id)}}>
          <CollectionCard
            key={punk.token_id}
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_original_url}
          />
        </div>
      ))}
    </div>
  );
};

export default Punklist;

// //https://stackoverflow.com/questions/48163744/expected-to-return-a-value-in-arrow-function-array-callback-return-why