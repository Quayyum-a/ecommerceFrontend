import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link className="links" to="/products/1">
              Electronics
            </Link>
          </div>
          <div className="item">
            <Link className="links" to="/products/2">
              Fashion
            </Link>
          </div>
          <div className="item">
            <Link className="links" to="/products/3">
              Home & Garden
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="links" to="/">
            <span className="brand-text">VIBE</span>
            <span className="brand-accent">MART</span>
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="links" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="links" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="links" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="links" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
// atomic commit 1
// atomic commit 2
// atomic commit 3
// atomic commit 4
// atomic commit 5
// atomic commit 6
// atomic commit 7
