import Container from './components/gContainer/Container';
import NavBar from './components/kNavBar/NavBar';
import Favorite from './components/lpages/Favorite';
import About from './components/lpages/About';
import Home from './components/lpages/Home';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/lpages/NotFound';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
