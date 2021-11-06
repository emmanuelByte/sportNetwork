import React from "react";
import { Container } from "@mui/material";
import { Box, styled } from "@mui/system";
import logoSrc from "assets/images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <HeaderStyle>
      <div className="logo">
        <img src={logoSrc} />
      </div>
      <div className="nav-links">
        <Link to="/">Basket Ball</Link>
        <Link to="/">Contact</Link>
      </div>
    </HeaderStyle>
  );
};
const HeaderStyle = styled(Box)`
  background-color: #fff;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    background: #fce61d;
    clip-path: polygon(0 0, 100% 0, 76% 100%, 0 100%);
    padding: 10px 40px 10px 20px;
    height: 100%;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .nav-links {
    display: flex;
    margin-right: 20px;
    gap: 1rem;
    a {
      color: black;

      text-decoration: none;
    }
  }
`;
export default Header;
