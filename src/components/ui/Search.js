import React, { useState } from "react";

const Search = () => {
  const [char, setChar] = useState("");
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Characters"
          autoFocus
          value={char}
          onChange={(e) => setChar(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
