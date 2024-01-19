import React from 'react';

const NavBar = () => {
  const JorgEdu1 = "{JorgEdu1}";

  return (
      <header>
        <a href="index.html"><h1 style={{ color: 'aliceblue' }}>{JorgEdu1}</h1></a>
        <div className="menu">
          <nav className="nav-list">
            <a href="#home">Home</a>
            <a href="#projects">Projetos</a>
            <a href="#contact">Contato</a>
            <a href="#" id="downloadButton">Download Currículo</a>
          </nav>
        </div>
      </header>
  );
}

export default NavBar;
