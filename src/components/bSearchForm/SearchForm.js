import styles from './SearchForm.module.scss';
import TextInput from '../dTextInput/TextInput';
import Button from '../eButton/Button';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchString } from '../../redux/searchStringRedux';

const SearchForm = () => {
    const searchString = useSelector(state => state.searchString);
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(searchString));
    };

    const handleChange = e => {
        dispatch(updateSearchString(e.target.value));
    };

    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput
                placeholder="Search..."
                value={searchString}
                onChange={handleChange}
            />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;
