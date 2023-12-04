import { AccountSession } from "./components/AccountSession";
import { Header } from "./components/Header";
import { ShortcutsSession } from "./components/ShortcutsSession";

function App() {
  return (
    <div >
      <header>
        <Header />
        <AccountSession />
        <ShortcutsSession />
      </header>
    </div>
  );
}

export default App;
