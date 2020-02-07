import React from "react";
import { StoreContext } from "../store/store";
import { useObserver } from "mobx-react";
import Listings from "./Listings";
 
const FixedMenu = ({menuItem1, menuItem2, menuItem3}) => {
  const store = React.useContext(StoreContext);

  function handleClick(food) {
    store.selectFood(food);
    store.getRestaurants(food);
  }

  return useObserver(() => (
    <div className="pa2">
      <button onClick={e => handleClick(e.target.value)} value={menuItem1} className="pa2 bn br2 mh1">Pizza</button>
      <button onClick={e => handleClick(e.target.value)} value={menuItem2} className="pa2 bn br2 mh1">Burger</button>
      <button onClick={e => handleClick(e.target.value)} value={menuItem3} className="pa2 bn br2 mh1">Sushi</button>
      <div className="flex">
      </div>
    </div>
  ));
};

export default FixedMenu;