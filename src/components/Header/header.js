import React from "react";
import './header.css';

function Header({black}) {
  return (
    <header className={black ? 'black' :''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://logosmarcas.net/wp-content/uploads/2020/04/Netflix-Logo.png" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://thumbs.dreamstime.com/z/quadrado-engra%C3%A7ado-do-emoticon-do-vetor-da-cara-dos-desenhos-animados-do-sorriso-71594301.jpg" />
        </a>
      </div>
    </header>
  )
}

export default Header;
