import React from 'react';
import Split from './composition/Split';
import './App.css';
import HelloWorld from './state-drills/HelloWorld.js';
import Bomb from './state-drills/Bomb.js';
import RouletteGun from './state-drills/RouletteGun.js';
import Accordion from './state-drills/Accordion.js';

const sectionsProp = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h2>Hello World</h2><hr />
        <HelloWorld />
        <h2>Bomb</h2><br />
        <Bomb />
        <h2>Roulette Gun</h2><br />
        <RouletteGun bulletInChamber={6} />
        <h2>Accordion</h2><br />
        <Accordion sections={sectionsProp}/>
      </div>
    );
  }
}

export default App;


/* NOte:
Configurable sizes
To make the Split component 
configurable, we can utilize the 
flex-basis style. At the moment we 
have specified the flex: 1 inside 
the Split.css file. If we change 
one of the Split instances to have 
a flex-basis: 2 instead, it will 
double the size of it compared to 
the other that has a flex-basis: 1.

Inside the App component, let's add 
the prop we would like to work on. 
To make the left double the size of 
the right, add flexBasis={2} to the 
left Split.
*/