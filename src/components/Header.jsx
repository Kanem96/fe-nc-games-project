import React from "react";
import { Link } from "react-router-dom";
import pageBanner from "../assets/images/pageBanner.png";

const Header = () => {
  return (
    <div>
      <Link to="/reviews" className="header-link"><h1 className="header">NC Games</h1></Link>
      <img src={pageBanner} alt="retro" className="page-banner" />
    </div>
  );
};

export default Header;