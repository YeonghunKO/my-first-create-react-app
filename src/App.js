import React from 'react';
import { choice, remove } from './helper';
import fruit from './food';

class App extends React.Component {
  render() {
    const chosenFruit = choice(fruit);
    const removedFruit = remove(fruit, chosenFruit);
    console.log(chosenFruit, removedFruit, fruit);
    return (
      <div>
        <p>I'd like one {chosenFruit}, please</p>
        <p>Here you go {removedFruit}</p>
        <p>Delicious, May I have another one bitch?</p>
        <p>
          I'm sorry we're all out. But, we have another {fruit.length} fruits
          lefts
        </p>
      </div>
    );
  }
}

export default App;
