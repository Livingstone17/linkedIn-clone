import React from 'react';

import './App.css';
import Feeds from './Components/Feeds/Feeds';
import Header from './Components/header/Header';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Header/>
      <div className='app-body'>
          <Sidebar/>
          <Feeds/>
      </div>
    </div>
  );
}

export default App;
