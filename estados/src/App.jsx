import Lista from './components/Lista';
import './App.css'
import Contador from "./components/Contador";
function App() {
  return (
    <>
      {/* Renderiza o componente responsável pela funcionalidade de contador. */}
      <Contador />
      <Lista />
    </>
  )
}

// Exporta o componente principal para ser usado pela aplicação React.
export default App
