import React from "react";

const Header = ({ title, subTitle }) => (
  <div className="pa2">
      <h2 className="f-headline tc mb0 mt5">{title}</h2>
      <p className="f4 tc">{subTitle}</p>
  </div>
);

export default Header;
