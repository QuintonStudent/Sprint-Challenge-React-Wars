import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import People from './components/people.js'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [people, setPeople] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect( () => {
    axios.get('https://swapi.co/api/people/')
      .then( response => {
        console.log(response.data.results)
        setPeople(response.data.results)
      })
      .catch( error => {
      console.log(error)
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      <div className='cards'>
      {people.map( (item, index) =>
        <People
          key={index}
          propName={item.name}
          propHeight={item.height}
          propHairColor={item.hair_color}
          propEyeColor={item.eye_color}
        />
      )}
      </div>

    </div>
  );
}

export default App;
