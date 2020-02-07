import "tachyons/css/tachyons.min.css";
import React from 'react';
import FixedMenu from './components/FixedMenu';
import Search from './components/Search';
import Listings from './components/Listings';
import './App.css';
import {StoreProvider, StoreContext} from './store/store'


function App() {
  return (
    <StoreProvider>
      <div className="mw8 center">
        <FixedMenu menuItem1={"pizza"} menuItem2={"burger"} menuItem3={"sushi"} />
        <Search /> 
        <Listings />
      </div>
    </StoreProvider>
  );
}

export default App;
