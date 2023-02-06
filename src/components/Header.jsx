import React from "react";
import pageBanner from "../assets/images/pageBanner.png";

const Header = () => {
  return (
    <div>
      <h1 className="header">NC Games</h1>
      <img src={pageBanner} alt="retro" className="page-banner" />
    </div>
  );
};

export default Header;