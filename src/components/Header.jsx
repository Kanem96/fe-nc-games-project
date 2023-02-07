import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <section>
      <Link to="/reviews" className="header-link">
        <h1 className="header">NC Games</h1>
      </Link>
    </section>
  );
};

export default Header;
