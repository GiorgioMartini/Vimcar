import React from "react";
import Loading from "./../components/Loading";

const Listings = ({ loading, listings }) => {
  return (
    loading
      ? <Loading />
      : <div className="pa2">
        <div className="flex flex-wrap">
          {listings &&
            listings.map((rest, i) => {
              return (
                <div key={i} className="listing pa2">
                  <div className="br2 pa2 shadow-5 flex flex-column justify-stretch h-100">
                    <div style={{ backgroundImage: `url(${rest.image_url})` }} className="cover pa5" />
                    <p className="mv2">{rest.name}</p>
                    <p className="f6 mt2">{rest.location.address1}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
  )
};

export default Listings;
