import React, { Component } from 'react';

import './App.css';
import Experiences from './Experiences';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experiences: []
    }
  }

  render() {
    return (
      <div className="App">
          <Experiences experiences={this.state.experiences} />  
      </div>
    );
  }
}

export default App;
