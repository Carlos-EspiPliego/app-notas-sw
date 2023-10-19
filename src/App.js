import './App.css';
import './styles/global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/**Poner las rutas de los componentes importados */}
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
