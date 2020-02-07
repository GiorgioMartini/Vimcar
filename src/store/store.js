import { useLocalStore } from "mobx-react";
import React from "react";
import { fetchRestaurants } from "../utils/api";

const StoreContext = React.createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    selectedFood: "pizza",
    selectFood: food => (store.selectedFood = food),
    restaurantResults: {},
    getRestaurants: food => {
      if (!store.restaurantResults[food]) {
        fetchRestaurants(food).then(res => {
          store.restaurantResults[food] = res.businesses
        });
      }
    }
  }));
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
