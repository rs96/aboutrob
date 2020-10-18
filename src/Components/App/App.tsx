import React from 'react';
import Navbar from '../Navbar/Navbar'
import Title from '../Title/Title';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Title title='Rob' />
        <Navbar />
        <p>
          This is the first draft of the work.
        </p>
      </header>
    </div>
  );
}

export default App;
