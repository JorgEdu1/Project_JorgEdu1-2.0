import React from 'react';

const HomeSection = () => {
  return (
    <section id="home">
      <div className="home-info">
        <h2 style={{ color: 'white' }} className="animated">Jorge Eduardo aqui! 🖖🏽</h2>
        <span className="home-resume"> Estudante de Ciência da Computação na UFC, 
          apaixonado por tecnologia e programação. 
          Atualmente estou estudando Node.JS e algumas bibliotecas do JavaScript.
        </span>
        <button className='home-btn'>
          <a href="#contact">Contate-me</a>
        </button>
      </div>
      <div className="home-img">
        <img className="img-perf" src="/img/profile-pic.png" alt="Foto de Perfil" />
      </div>
    </section>
  );
};

export default HomeSection;
