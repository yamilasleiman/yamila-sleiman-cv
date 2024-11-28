import HeaderComponent from "./components/header"
import Descripcion from "./components/descripcion"
import Informacion from "./components/infomacion/informacion"
import './styles.scss'

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Descripcion/>
      <Informacion/>
    </div>
  );
}

export default App;
