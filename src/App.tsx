import { AccountSession } from "./components/AccountSession";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { ShortcutsSession } from "./components/ShortcutsSession";

function App() {
  return (
    <div >
      <header>
        <Header />
        <AccountSession />
        <ShortcutsSession />
        <Menu />
      </header>
    </div>
  );
}

export default App;
