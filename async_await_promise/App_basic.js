import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  // data state and storage
  const [data, setData] = useState([]);

  useEffect( ()=> {
      loadData(); 
    }, []
  ); // last [] is dependancy

  
  const loadData = async ()=> {  
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(receivedData => setData(receivedData));
  } // comment out loadData on Line 12 

  return (
    <div className="App">

      <h4>Example of Fetch, Async, Await</h4>
      {data.map(
          record => (
            <div key={record.id}>{record.name}, {record.email}</div>
          )
      )}

    </div>
  );
}

export default App;
