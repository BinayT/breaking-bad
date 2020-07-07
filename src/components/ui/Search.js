import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [char, setChar] = useState("");
  const onChange = (q) => {
    setChar(q);
    getQuery(q);
  };
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Characters"
          autoFocus
          value={char}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
