import React from 'react';
import {useSelector} from 'react-redux';
import './App.css';
import Feeds from './Components/Feeds/Feeds';
import Header from './Components/header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import { selectUser } from './features/userSlice';
import Login from '../src/Components/Login/Login'

function App() {

  const user = useSelector(selectUser);
  return (
    <div className="app">
      <Header/>
      {!user ? <Login /> : (
         <div className='app-body'>
         <Sidebar/>
         <Feeds/>
     </div>
      )}
     
    </div>
  );
}

export default App;
