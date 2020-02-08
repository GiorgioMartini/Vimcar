import React from "react";
import { StoreContext } from "../store/store";
import { useObserver } from "mobx-react";
 
const FixedMenu = ({menuItem1, menuItem2, menuItem3}) => {
  const store = React.useContext(StoreContext);

  function handleClick(food) {
    store.selectFood(food);
    store.getRestaurants(food);
  }

  return useObserver(() => (
    <div className="pa2 flex justify-center">
      <button onClick={e => handleClick(e.target.value)} value={menuItem1} className="pa3 b white bg-orange bn br2 mh3 pointer grow ">{menuItem1}</button>
      <button onClick={e => handleClick(e.target.value)} value={menuItem2} className="pa3 b white bg-orange bn br2 mh3 pointer grow ">{menuItem2}</button>
      <button onClick={e => handleClick(e.target.value)} value={menuItem3} className="pa3 b white bg-orange bn br2 mh3 pointer grow ">{menuItem3}</button>
    </div>
  ));
};

export default FixedMenu;
