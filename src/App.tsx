import { AccountSession } from "./components/AccountSession";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { ShortcutsSession } from "./components/ShortcutsSession";
import { CreditCard } from "./components/Cards";
import { Container, Funcionalitys, Grid } from "./style"

export const App = () => {
  return (
    <Container>
      <Header />
      <AccountSession />
      <ShortcutsSession />
      <Funcionalitys>
        <Menu />
        <Grid>
          <CreditCard />
        </Grid>
      </Funcionalitys>
    </Container>
  )
}
