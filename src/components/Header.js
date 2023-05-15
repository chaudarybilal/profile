import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "../Navigation";
import styled from "styled-components";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <h3>Muhammad Bilal</h3>
      </NavLink>
      <Navigation />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 5rem;
  background-color:rgb(64, 66, 88);;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: white;
  }

  h3 {
    margin: 0;
    font-size: 1.6rem;
  }

  .logo {
    height: auto;
    max-width: 30%;
  }
`;

export default Header;
