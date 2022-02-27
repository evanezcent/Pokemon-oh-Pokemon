import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DataProvider } from "./providers/pokemon-provider";
import { Home } from "./pages/home";
import { DetailPokemon } from "./pages/detail-pokemon";

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:code" element={<DetailPokemon />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
