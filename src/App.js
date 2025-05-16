import Hero from './components/aHero/Hero';
import SearchForm from './components/bSearchForm/SearchForm';
import List from './components/cList/List';
import Container from './components/gContainer/Container';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';

// Tymczasowo
const Favorite = () => <h2 style={{ color: 'white' }}>Favorite Page</h2>;
const About = () => <h2 style={{ color: 'white' }}>About Page</h2>;

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
