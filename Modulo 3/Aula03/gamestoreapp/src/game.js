import React from "react";
import "./App.css";

export default function Games(){
    const games = [
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
            "https://static.wikia.nocookie.net/mortalkombat/images/6/62/Ultimate_Mortal_Kombat_3.jpg/revision/latest?cb=20140914174343&path-prefix=pt",
        },
        {
          id: 5,
          nome: "Bomberman",
          urlImagem:
            "https://i0.wp.com/galaxianerd.com/wp-content/uploads/2018/02/super-bomberman-ps3-destravado-envio-via-email-D_NQ_NP_828190-MLB26633900091_012018-F.jpg",
        },
      ],

    return (
        <section classname="card">
          <header>
            <h1>Meus Games</h1>
          </header>
          <ul>
            {games.map((g) => (
              <li key={g.id}>
                <h4>{g.nome}</h4>
                <img src={g.urlImagem} alt={g.nome} />
              </li>
            ))}
          </ul>
        </section>
      );
    };
 

    

