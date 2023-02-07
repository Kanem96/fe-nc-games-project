import React from "react";
import { Link } from "react-router-dom";
import pageBanner from "../assets/images/pageBanner.png";

const Header = () => {

  return (
    <section>
      <Link to="/reviews" className="header-link">
        <h1 className="header">NC Games</h1>
      </Link>
      <section className="divider"></section>
      <img src={pageBanner} alt="retro" className="page-banner" />
    </section>
  );
};

export default Header;
