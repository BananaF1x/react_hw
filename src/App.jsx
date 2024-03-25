import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <>
      <Header />
      <main>
        <ul>
          <Menu />
        </ul>
      </main>
    </>
  );
}

export default App;
