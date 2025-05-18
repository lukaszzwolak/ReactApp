import Hero from '../aHero/Hero';
import SearchForm from '../bSearchForm/SearchForm';
import Lists from '../nLists/Lists'; // poprawna ścieżka do komponentu Lists

const Home = () => {
    return (
        <>
            <Hero />
            <SearchForm />
            <Lists />
        </>
    );
};

export default Home;
