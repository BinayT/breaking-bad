import React from "react";

const CharaterItem = ({ el }) => {
  console.log(el);
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={el.img} alt={`${el.name}`} />
        </div>
        <div className="card-back">
          <h1>{el.name}</h1>
          <ul>
            <li>
              <strong>Actor Name -- </strong>
              {el.portrayed}
            </li>
            <li>
              <strong>Nickname -- </strong>
              {el.nickname}
            </li>
            <li>
              <strong>Birthday -- </strong>
              {el.birthday}
            </li>
            <li>
              <strong>Occupation -- </strong>
              {el.occupation[0]}
            </li>
            <li>
              <strong>Status -- </strong>
              {el.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharaterItem;
