import React from 'react';
import FixedMenu from './FixedMenu';
import Search from './Search';
import Listings from './Listings';
import Header from './Header';
import { StoreContext } from "./../store/store";
import { useObserver } from "mobx-react";

const Restaurants = () => {
  // This restaurant wrapper helped me have acces to the store so i can pass the listings a s props
  // to the Listings component so we could reuse the component, not sure if its the correct way though.
  const store = React.useContext(StoreContext);
  return useObserver(() => (
    <div className="mw8 center">
      <Header title="EasyLunch" subTitle="Find Pizza, Burgers or Sushi in Berlin the easy way" />
      <FixedMenu menuItem1={"Pizza"} menuItem2={"Burger"} menuItem3={"Sushi"} />
      <p className="b tc pt3">or...</p>
      <Search />
      <Listings loading={store.loading} listings={store.restaurantResults[store.selectedFood]} />
    </div>
  ))
}

export default Restaurants;
