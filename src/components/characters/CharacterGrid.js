import React from "react";
import CharaterItem from "./CharaterItem";
import Spinner from "../ui/Spinner";

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((el) => (
        <CharaterItem key={el.char_id} el={el} />
      ))}
    </section>
  );
};

export default CharacterGrid;
