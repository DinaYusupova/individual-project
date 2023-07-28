import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './index.css';

function NavBar(): JSX.Element {
  return (
    <header className="header">
      <div className="logo">
      ELBRUS-KINO
      </div>

      <div className="menu">
        <div className="text"><a href="/">РАНДОМНОЕ</a></div>
        <div className="text"><a href="/popular">ПОЛУЛЯРНОЕ</a></div>
        <div className="text"></div>
      </div>
    </header>
  );
}

export default NavBar;
