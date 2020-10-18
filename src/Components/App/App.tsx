import React from 'react';
import Navbar from '../Navbar/Navbar'
import Title from '../Title/Title';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Title title='Rob' />
      <Navbar items={['Main', 'Contact']} />
      <p>
        This is the first draft of the work.
        </p>
    </div>
  );
}

export default App;
