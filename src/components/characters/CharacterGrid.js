import React from "react";
import CharaterItem from "./CharaterItem";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {items.map((el) => (
        <CharaterItem key={el.char_id} el={el} />
      ))}
    </section>
  );
};

export default CharacterGrid;
