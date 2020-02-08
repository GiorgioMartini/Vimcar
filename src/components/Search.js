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
        <form className="tc" onSubmit={handleSubmit}>
          <div className="center">
            <input placeholder="Type in Pasta, Tacos..." className="bn bg-light-gray br2 b h2 pa2 mr2" onChange={e => handleChange(e.target.value)} type="text" />
            <input className="search-tbn pointer h2 bn bg-gray white pa2 br2 b" type="submit" value="Search" />
          </div>
        </form>
    </div>
  ));
};

export default Search;
