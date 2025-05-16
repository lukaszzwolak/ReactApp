import Hero from './components/aHero/Hero';
import SearchForm from './components/bSearchForm/SearchForm';
import List from './components/cList/List';
import Container from './components/gContainer/Container';
import NavBar from './components/kNavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import Favorite from './components/lpages/Favorite';
import About from './components/lpages/About';

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <SearchForm />
              <List />
            </>
          } />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
