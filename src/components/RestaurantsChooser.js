import React from "react";
import { StoreContext } from "../store/store";
import { useObserver } from "mobx-react";

const RestaurantsChooser = () => {
  // const [selectedfood, setSelectedFood] = React.useState('pizza')

  const store = React.useContext(StoreContext);

  function handleClick(food) {
    store.selectFood(food);
    store.getRestaurants(food);
  }

  return useObserver(() => (
    <div className="pa2">
      {/* <p>store: {JSON.stringify(store.restaurantResults[store.selectedFood])}</p> */}

        <button onClick={e => handleClick(e.target.value)} value="pizza" className="pa2 bn br2 mh1">Pizza</button>
        <button onClick={e => handleClick(e.target.value)} value="burger" className="pa2 bn br2 mh1">Burger</button>
        <button onClick={e => handleClick(e.target.value)} value="sushi" className="pa2 bn br2 mh1">Sushi</button>
      <div className="flex">

        {store.restaurantResults[store.selectedFood]
        && store.restaurantResults[store.selectedFood].map((rest, i) => {
          return (
            <div key={i} className="pa2">
              <img src={rest.image_url} alt="restuarant"/>
              <p>Reviews{rest.review_count}</p>
            </div>
          )
        })}
      </div>
    </div>
  ));
};

export default RestaurantsChooser;

