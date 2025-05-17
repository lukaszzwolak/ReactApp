import Container from './components/gContainer/Container';
import NavBar from './components/kNavBar/NavBar';
import Favorite from './components/lpages/Favorite';
import About from './components/lpages/About';
import Home from './components/lpages/Home';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Home />
        <Favorite />
        <About />
      </Container>
    </main>
  );
};

export default App;
