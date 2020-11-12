import React, { useState } from "react";
import Logo from "./1logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
import styled from "styled-components";
import { Button, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
/* import MenuIcon from "@material-ui/icons/Menu"; */
import LocalPizzaIcon from "@material-ui/icons/LocalPizza";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <Link to="/" className="header__button">
        <img src={Logo} alt="Logo" className="header__logo" />
      </Link>
      <div className="header__menu">
        <IconButton onClick={handleClick}>
          <p className="icon__text">MENU</p>
          {click ? (
            <CloseIcon className="icon" />
          ) : (
            <LocalPizzaIcon className="icon" />
          )}
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
