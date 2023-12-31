import React, { useState, useEffect } from "react";

import "./App.css";
import arrow from "./assets/arrow-right.svg";
import rocket from "./assets/rocket.svg";
import ray from "./assets/ray.svg";
import tool from "./assets/tool.svg";
import present from "./assets/present.svg";

import { Modal } from "./components/Modal";
function App() {
  const [email, setEmail] = useState("");
  const [sentEmail, setSentEmail] = useState([]);
  const [emailList, setEmailList] = useState([]); // Novo estado para a lista de e-mails

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/api/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert("E-mail cadastrado com sucesso!");
        console.log('E-mail cadastrado com sucesso')
        setSentEmail([...sentEmail, email]);
        setEmail("");
      } else {
        alert("Erro ao cadastrar o e-mail.");
      }
    } catch (error) {
      console.error("Erro ao enviar o e-mail:", error);
    }
  };

  // Rota get para exibir os emais cadastrados

  // useEffect(() => {
  //   async function fetchEmails() {
  //     try {
  //       const response = await fetch("http://localhost:3001/api/emails");
  //       if (response.ok) {
  //         const data = await response.json();
  //         setEmailList(data); // Atualize o estado com os e-mails recebidos do backend
  //       } else {
  //         console.error("Erro ao buscar a lista de e-mails");
  //       }
  //     } catch (error) {
  //       console.error("Erro ao buscar a lista de e-mails:", error);
  //     }
  //   }

  //   fetchEmails();
  // }, []);
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
          <form onSubmit={handleSubmit} className="container-input-button">
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">
              quero receber
              <img src={arrow} />
            </button>
          </form>

          {/* exibir a lista dentro da div abaixo */}
          {/* <div>
            <h2>Lista de E-mails:</h2>
            <ul>
              {emailList.map((emailObj) => (
                <li key={emailObj._id}>{emailObj.email}</li>
              ))}
            </ul>
          </div> */}

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
