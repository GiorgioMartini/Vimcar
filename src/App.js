import "tachyons/css/tachyons.min.css";
import React from 'react';
import FixedMenu from './components/FixedMenu';
import Search from './components/Search';
import Listings from './components/Listings';
import Header from './components/Header';
import './App.css';
import {StoreProvider} from './store/store'

function App() {
  return (
    <StoreProvider>
      <div className="mw8 center">
        <Header title="EasyLunch" subTitle="Find Pizza, Burgers or Sushi in Berlin the easy way"/> 
        <FixedMenu menuItem1={"Pizza"} menuItem2={"Burger"} menuItem3={"Sushi"} />
        <p className="b tc pt3">or...</p>
        <Search /> 
        <Listings />
      </div>
    </StoreProvider>
  );
}

export default App;
