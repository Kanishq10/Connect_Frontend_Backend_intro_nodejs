import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then(response => {
        // console.log(response.data); // Log the response data
        setJokes(response.data); // Adjust this line if necessary
      })
      .catch(error => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>HI, Wanna hear some jokes?</h1>
      <p>Jokes: {jokes.length}</p>
      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <h3>{joke.setup}</h3>
            <h4>{joke.punchline}</h4>
          </div>
        ))
      }
    </>
  );
}

export default App;
