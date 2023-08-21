import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";

import {Card, LinkBotao} from './styles'

const Projeto = ()=> (
  <Card>
    <Titulo fontSize={16}> Projetos Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario"> Lista de tarefas feita com VueJS </Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
