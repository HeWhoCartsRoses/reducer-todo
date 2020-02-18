import React from 'react';
import './App.css';
import Creation from './Creation'
import { initState, simpRed } from './reducers/simpReducer';
function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Here is what you need to do!</h1>
      </div>
      <Creation></Creation>
      <button className="clear-btn" onClick={() => this.hitman()}>
        Clear Completed!
  </button>
    </div >
  );
}

export default App;
