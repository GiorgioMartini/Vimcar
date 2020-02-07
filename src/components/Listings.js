import React from "react";
import { StoreContext } from "./../store/store";
import { useObserver } from "mobx-react";

const Listings = () => {
  const store = React.useContext(StoreContext);
  return useObserver(() => (
    <div className="pa2">
      <div className="flex">
        {store.restaurantResults[store.selectedFood] &&
          store.restaurantResults[store.selectedFood].map((rest, i) => {
            return (
              <div key={i} className="pa2">
                <img src={rest.image_url} alt="restuarant" />
                <p>Reviews{rest.review_count}</p>
              </div>
            );
          })}
      </div>
    </div>
  ));
};

export default Listings;
