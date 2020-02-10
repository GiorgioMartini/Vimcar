import React from 'react';
import FixedMenu from './FixedMenu';
import Search from './Search';
import Listings from './Listings';
import Header from './Header';
import { StoreContext } from "./../store/store";
import { useObserver } from "mobx-react";

const Restaurants = () => {
  const store = React.useContext(StoreContext);
  return useObserver(() => (
    <div className="mw8 center">
      <Header title="EasyLunch" subTitle="Find Pizza, Burgers or Sushi in Berlin the easy way" />
      <FixedMenu menuItem1={"Pizza"} menuItem2={"Burger"} menuItem3={"Sushi"} />
      <p className="b tc pt3">or...</p>
      <Search />
      <Listings listings={store.restaurantResults[store.selectedFood]} />
    </div>
  ))
}

export default Restaurants;
