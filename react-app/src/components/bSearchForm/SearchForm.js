import styles from './SearchForm.module.scss';
import TextInput from '../dTextInput/TextInput'
import Button from '../eButton/Button';

const SearchForm = () => {
    return (
        <form className={styles.searchForm}>
            <TextInput placeholder="Search..." />
            <Button text="Search" />
        </form>
    );
};

export default SearchForm;