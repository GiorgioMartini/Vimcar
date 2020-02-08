import React from "react";
import { StoreContext } from "./../store/store";
import Loading from "./../components/Loading";
import { useObserver } from "mobx-react";

const Listings = () => {
  const store = React.useContext(StoreContext);
  // ask in so weather or when to pass props to set some value vs just using mobx

  return useObserver(() => (
    store.loading
      ? <Loading />
      : <div className="pa2">
        <div className="flex flex-wrap">
          {store.restaurantResults[store.selectedFood] &&
            store.restaurantResults[store.selectedFood].map((rest, i) => {
              return (
                <div key={i} className="pa2 listing">
                  <img className='object-fit' src={rest.image_url} alt="restuarant" />
                  <p>{rest.name}</p>
                  <p>{rest.location.address1}</p>
                </div>
              );
            })}
        </div>
      </div>
  ));
};

export default Listings;
