import "./App.css";
import City from "./assets/city.jpg"
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";

function App() {
  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em React */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em asset */}
      <div>
          <img src={City} alt="Cidade" />
      </div>
      <ManageData/>
      <ListRender/>
    </div>
  )
}

export default App