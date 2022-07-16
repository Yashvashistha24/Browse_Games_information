import React, { useEffect, useState } from "react";
import "./style.css";

const Resturant = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json"
    );
    const data = await response.json();
    setUsers(data.slice(1, data.length));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Browse Games</h1>
      <input type="search" id="searchB" placeholder="search.." />
      <div className="item-container">
        {users.map((product) => (
          <div className="card">
            <h2>{product.title}</h2>
            <h3>{product.platform}</h3>
            <p>{product.score}</p>
            <p>{product.genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resturant;
