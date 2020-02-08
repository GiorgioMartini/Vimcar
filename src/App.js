import "tachyons/css/tachyons.min.css";
import React from 'react';
import FixedMenu from './components/FixedMenu';
import Search from './components/Search';
import Listings from './components/Listings';
import Header from './components/Header';
import './App.css';
import {StoreProvider, StoreContext} from './store/store'


function App() {
  return (
    <StoreProvider>
      <div className="mw8 center">
        <Header title="Lunch easy" subTitle="Find Pizza, Burgers or Sushi in Berlin the easy way"/> 
        <FixedMenu menuItem1={"pizza"} menuItem2={"burger"} menuItem3={"sushi"} />
        <p className="b tc pt5">or...</p>
        <Search /> 
        <Listings />
      </div>
    </StoreProvider>
  );
}

export default App;
