import React, { useState } from "react";


import "./App.css";
import arrow from "./assets/arrow-right.svg";
import rocket from "./assets/rocket.svg";
import ray from "./assets/ray.svg";
import tool from "./assets/tool.svg";
import present from "./assets/present.svg";
function App() {

  return (
    <>
      <div className="wrapper-page">
        <h3 className="newsletter-title">newsletter exclusiva</h3>
        <h1>Workspace inspiration</h1>
        <p className="initial-text">
          Assine nossa newsletter e transforme seu espaço de trabalho em um
          oásis de produtividade!
        </p>
        <div>
          <form className="container-input-button">
            <input
              type="email"
              placeholder="Digite seu e-mail"
            />
            <button type="submit">
              quero receber
              <img src={arrow} />
            </button>
          </form>

          <div className="cards-container">
            <div className="card">
              <div className="card-image-container">
                <img src={rocket} />
              </div>
              <h3>As últimas inovações</h3>
              <p>
                Mantenha-se atualizado com as mais recentes tecnologias e
                acessórios que vão revolucionar a forma como você trabalha.
              </p>
            </div>
            <div className="card">
              <div className="card-image-container">
                <img src={ray} />
              </div>
              <h3>Reviews detalhadas</h3>
              <p>
                Analisamos os produtos mais populares do mercado para que você
                possa fazer as escolhas certas.{" "}
              </p>
            </div>
            <div className="card">
              <div className="card-image-container">
                <img src={tool} />
              </div>
              <h3>Dicas de organização</h3>
              <p>
                Aumente sua eficiência e proteja sua saúde com conselhos
                especializados sobre ergonomia e organização.
              </p>
            </div>
            <div className="card">
              <div className="card-image-container">
                <img src={present} />
              </div>
              <h3>Ofertas exclusivas</h3>
              <p>
                Como membro da nossa comunidade, você terá acesso a descontos e
                promoções especiais em produtos selecionados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
