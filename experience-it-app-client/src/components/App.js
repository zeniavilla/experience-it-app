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

  componentDidMount() {
    fetch('http://localhost:3001/api/experiences')
      .then(response => response.json())
      .then(experiences => this.setState({ experiences }))
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
          <Experiences experiences={this.state.experiences} />  
      </div>
    );
  }
}

export default App;
