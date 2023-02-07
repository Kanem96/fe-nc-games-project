import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../api";

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoryList = await getCategories();
      setCategories(categoryList);
    };
    fetchCategories();
  }, []);

  return <nav className="nav-bar">
    {categories.map(category => {
        return <Link to="/reviews/:category" className="nav-link">{category.slug}</Link>
    })}
  </nav>;
};

export default Nav;
