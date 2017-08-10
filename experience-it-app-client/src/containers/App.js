import React, { Component } from 'react';
import './App.css';

import Experiences from './Experiences';

const API_URL = process.env.REACT_APP_API_URL;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      experiences: []
    }
  }

  componentDidMount() {
    fetch(`${API_URL}/experiences`)
      .then(response => response.json())
      .then(experiences => this.setState({ experiences }))
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
