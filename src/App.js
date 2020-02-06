import "tachyons/css/tachyons.min.css";
import React from 'react';
import RestaurantsChooser from './components/RestaurantsChooser';
import './App.css';
import {StoreProvider} from '././store/store'

function App() {
  return (
    <StoreProvider>
      <div className="mw8 center">
        <header className="">
        <RestaurantsChooser />
        </header>
      </div>
    </StoreProvider>
  );
}

export default App;
