import Titulo from "../../../components/Titulo";
import Paragrafo from "../../../components/Paragrafo";
import { GithubSession } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quis, illum corrupti expedita omnis asperiores in quisquam ipsam fuga possimus sed debitis repudiandae ducimus eos nam impedit odit mollitia velit.
    </Paragrafo>
    <GithubSession>
      <img src="https://github-readme-stats.vercel.app/api?username=kostikGS&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=kostikGS&layout=compact&langs_count=7&theme=dracula"/>
    </GithubSession>
  </section>
)

export default Sobre
