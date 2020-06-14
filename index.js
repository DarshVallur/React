import React, { Component } from 'react';
import { render } from 'react-dom';
import DemoSigin from './DemoSigin';
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <DemoSigin/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
