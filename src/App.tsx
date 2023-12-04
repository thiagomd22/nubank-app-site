import { AccountSession } from "./components/AccountSession";
import { SignInButton } from "./components/Buttons";
import { Header } from "./components/Header";

function App() {
  return (
    <div >
      <header>
        <Header />
        <AccountSession />
      <h1>Isso vai ser o app da nubank web</h1>
      <SignInButton/>
      </header>
    </div>
  );
}

export default App;
