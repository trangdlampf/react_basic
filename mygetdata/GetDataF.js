import React, { useState, useEffect } from "react";
import axios from "axios";

// getData gets all posts
const GetDataF = () => {
  const [data, setData] = useState({}); // []
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`) // ${id}
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]); /* [] so no infinite loop of fetching data */

  return (
    <div>
      <p>My GetData</p>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" value={id} onClick={handleClick}>
        Click to Get Data
      </button>
      <div>{data.title}</div>
      {/* data.map( datum => <li key={datum.id}>
                {datum.title}
            </li>) */}
    </div>
  );
};

export default GetDataF;
