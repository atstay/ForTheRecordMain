import React from "react";

const SearchResult = props => {
  return (
    <div className="card">
      <p>{props.name}</p>
      <p>{props.instrument}</p>
    </div>
  );
};

export default SearchResult;
