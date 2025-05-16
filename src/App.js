import Container from './components/gContainer/Container';
import NavBar from './components/kNavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import Favorite from './components/lpages/Favorite';
import About from './components/lpages/About';
import Home from './components/lpages/Home';


const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
