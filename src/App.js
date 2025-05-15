import Hero from './components/aHero/Hero.js';
import SearchForm from './components/bSearchForm/SearchForm.js';
import List from './components/cList/List.js';
import Container from './components/gContainer/Container.js';

const App = () => {
  return (
    <div>
      <Container>
        <Hero />
        <SearchForm />
        <List />
      </Container>
    </div >
  );
};

export default App;
