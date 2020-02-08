import React from "react";

const Header = ({ title, subTitle }) => (
  <div className="pa2">
      <h2 className="f-headline mt4 tc mb0">{title}</h2>
      <p className="f4 tc">{subTitle}</p>
  </div>
);

export default Header;
