import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"
import {Descricao, ThemeButton, SideBarContainer} from "./styles"


const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={16}>Gabriel Kostik</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>kostikGS</Paragrafo>
      <Descricao tipo="principal" fontSize={12}>Engenheiro Front-End</Descricao>
      <ThemeButton>Trocar tema</ThemeButton>
    </SideBarContainer>

  </aside>
)


export default Sidebar
