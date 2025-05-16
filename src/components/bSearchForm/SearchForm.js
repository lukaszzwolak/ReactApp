import styles from './SearchForm.module.scss';
import TextInput from '../dTextInput/TextInput';
import Button from '../eButton/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSearchString } from '../../redux/store';

const SearchForm = () => {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(newValue));
    };

    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput
                placeholder="Search..."
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
            />
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
};

export default SearchForm;
