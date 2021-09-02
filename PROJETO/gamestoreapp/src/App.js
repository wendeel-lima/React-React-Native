import React, { useState, useEffect } from "react";
import "./App.css";
export { Video, Mapa, Games };

function Games() {
  const [games, setGames] = useState([
    {
      id: 1,
      nome: "Super Mario World",
      urlImagem:
        "https://upload.wikimedia.org/wikipedia/pt/0/06/Super-Mario-World.jpg",
    },
    {
      id: 2,
      nome: "Killer Instinct",
      urlImagem:
        "https://4.bp.blogspot.com/-wnpMxu_JudU/V8svKiHfN1I/AAAAAAAACQU/-eFE92oYYscsrodu9AMwiMF3mZlMrImKwCLcB/s1600/Killer-Instinct.jpg",
    },
    {
      id: 3,
      nome: "Top Gear",
      urlImagem:
        "https://s2.glbimg.com/7wRs2j2dg9fbZpdIRG5TkSEMPSA=/0x0:913x579/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/l/A/zPe6OzRnitN3F1rd77Gw/captura-de-tela-2020-04-24-as-10.06.52.png",
    },
    {
      id: 4,
      nome: "Mortal Kombat 3",
      urlImagem:
        "https://wowroms-photos.com/emulators-roms-logo/48/28486/420-420/Mortal+Kombat+3+(USA)+(Beta+2)-image.jpg",
    },
    {
      id: 5,
      nome: "Bomberman",
      urlImagem:
        "https://i0.wp.com/galaxianerd.com/wp-content/uploads/2018/02/super-bomberman-ps3-destravado-envio-via-email-D_NQ_NP_828190-MLB26633900091_012018-F.jpg",
    },
  ]);

  const [nome, setNome] = useState("");
  const [urlImagem, setUrlImagem] = useState("");
  const [editando, setEditando] = useState(false);
  const [indiceEditando, setIndiceEditando] = useState(null);

  useEffect(() => {
    if (indiceEditando !== null && editando) {
      setNome(games[indiceEditando].nome);
      setUrlImagem(games[indiceEditando].urlImagem);
    }
  }, [indiceEditando]);

  const handleNameChange = (evento) => {
    setNome(evento.target.value);
  };

  const handleUrlChange = (evento) => {
    setUrlImagem(evento.target.value);
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    if (editando) {
      const gameAtualizado = games.map((game, indice) => {
        if (indiceEditando === indice) {
          game.id = indice;
          game.nome = nome;
          game.urlImagem = urlImagem;
        }

        return game;
      });

      setGames(gameAtualizado);

      setEditando(false);

      setIndiceEditando(null);
    } else {
      setGames([
        ...games,
        {
          id: games.length + 1,
          nome: nome,
          urlImagem: urlImagem,
        },
      ]);
      setNome("");
      setUrlImagem("");
    }
  };

  const handleDelete = (indice) => {
    setGames(games.filter((game, indiceGame) => indice !== indiceGame));
  };

  return (
    <div className="content">
      <div>
        <div className="form">
          <h2>Cadastro de Games</h2>
          <form onSubmit={handleSubmit}>
            <label>Digite o nome: </label>
            <input type="text" value={nome} onChange={handleNameChange} />
            <br />
            <label>Digite a Url da Imagem: </label>
            <input type="" value={urlImagem} onChange={handleUrlChange} />
            <br />
            <button type="submit">Salvar</button>
          </form>
        </div>
      </div>
      <div id="projetos">
        {games.map((games, indice) => (
          <div id="card" key={indice}>
            <h2>{games.nome}</h2>
            <img src={games.urlImagem} alt={games.nome} />
            <button type="button" onClick={() => handleDelete(indice)}>
              Excluir
            </button>
            <button
              type="button"
              onClick={() => {
                setEditando(true);
                setIndiceEditando(indice);
              }}
            >
              Editar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
function Video() {
  return (
    <div className="video">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/5GziWsbFWqg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

function Mapa() {
  return (
    <div className="mapa">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7971.1573349621385!2d-56.74953722845487!3d-2.641585574833488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9263834a1e870159%3A0x9712a8df2b9649f4!2sIta%C3%BAna%20I%2C%20Parintins%20-%20AM!5e0!3m2!1spt-BR!2sbr!4v1630027155224!5m2!1spt-BR!2sbr"
        width="560"
        height="315"
        allowfullscreen=""
        loading="lazy"
        title="Meus Games"
      ></iframe>
    </div>
  );
}
