import React from 'react';
import Navbar from '../Navbar/Navbar';
import Title from '../Title/Title';
import Page from '../Page/Page';
import './App.css';

const App = () => (
  <div className='App-container'>
    <div className='App'>
      <Title title='Rob' />
      <Navbar items={['Main', 'Contact']} />
      <Page />
    </div>
  </div>
);

export default App;
