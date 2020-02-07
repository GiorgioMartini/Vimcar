import React, { useState } from "react";
import { StoreContext } from "../store/store";
import { useObserver } from "mobx-react";

const Search = () => {
  const [query, setQuery] = useState("");
  const store = React.useContext(StoreContext);

  function handleChange(input) {
    setQuery(input);
  }

  function handleSubmit(event) {
    event.preventDefault();
    store.selectFood(query);
    store.getRestaurants(query);
  }

  return useObserver(() => (
    <div className="pa2">
      <div className="flex">
        <form onSubmit={handleSubmit}>
          <input onChange={e => handleChange(e.target.value)} type="text" />
          <input type="submit" value="Search" />
        </form>
      </div>
    </div>
  ));
};

export default Search;
