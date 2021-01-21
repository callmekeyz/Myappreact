import './App.css';
import Header from './Header';
import JokeButton from './JokeButton';
import JokesContainer from './JokeContainer';

import { useEffect, useState } from 'react';

function App() {
  // tells React to perform actions that
  // are not directly related to drawing.
  // aka "side effects"
  // 
  useEffect(() => {
    async function getJoke() {
      // fetch the joke
      const jokePromise = fetch('https://icanhazdadjoke.com', {
          headers: {
              Accept: 'application/json'
          }
      });
      const response = await jokePromise;
      const jokeData = await response.json();
      
      console.log(jokeData.joke);
      //setJoke(jokeData.joke);
    }
    getJoke();
  });


  const [joke,setJoke] = useState("who's there");
  console.log(`this is the joke in state:`, joke);
  return (
    <div className="App">
      <Header />
      <JokeButton />
      <JokesContainer joke={joke} />
    </div>
  );
}

export default App;