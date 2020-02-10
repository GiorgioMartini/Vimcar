import "tachyons/css/tachyons.min.css";
import React from 'react';
import Restaurants from './components/Restaurants';
import './App.css';
import { StoreProvider } from './store/store'

function App() {
  return (
    <StoreProvider>
      <Restaurants />
    </StoreProvider>
  );
}

export default App;
