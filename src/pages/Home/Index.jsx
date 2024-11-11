import { Link } from "react-router-dom";
import './Home.css';

function Home() {
  return (
    <div className="menu_inicial">

      <div className="div_exemplo">
        <img src="src/assets/LogoEcolink.jpg" alt="" className="image_exemplo"/>
        <div>

          <section className="nossa_proposta">
            <h2>Nossa Proposta</h2>
          </section>

          <section className="sec_prop">

            <p className="proposta">
              Nossa proposta não apenas aborda uma questão de preservação ambiental mas tambem estaremos protegendo o meio ambiente, promovendo uma mudança positiva em nossa comunidade, gerando reconhecimento e incentivo para iniciativas sustentáveis, além disso,  também oferecendo a oportunidade de ganhar prêmios por contribuir com a sustentabilidade.
            </p>

          </section>

        </div>
      </div>

      <div className="div_botao_exemplo">
        <button className="botao_exemplo">Descartar</button>
      </div>

      <div className="div_exemplo2">

        <div>

          <section className="nossa_proposta">
            <h2>Concientização</h2>
          </section>

          <section className="sec_prop">

            <p className="proposta">
            A ecologia é a ciência que estuda as interações entre os seres vivos e o ambiente. Compreender esses relacionamentos é fundamental para garantir a saúde do nosso planeta e a qualidade de vida das futuras gerações. A preservação do meio ambiente não é apenas uma responsabilidade individual, mas um dever coletivo que impacta todos nós.
            Uma das questões mais urgentes que enfrentamos atualmente é o manejo do lixo. O descarte inadequado de resíduos pode causar sérios danos ao meio ambiente. Lixos jogados em locais inadequados não apenas poluem o solo e a água, mas também afetam a fauna e a flora locais, criando desequilíbrios ecológicos que podem ter consequências desastrosas.
            </p>

          </section>

        </div>
      </div>

      <div className="div_botao_exemplo">
        <button className="botao_exemplo">Aprenda Mais</button>
      </div>

    </div>
  );
}

export default Home;
