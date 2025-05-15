import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../eButton/Button';
import TextInput from '../dTextInput/TextInput';
import { useDispatch } from 'react-redux';

const ColumnForm = props => {
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_COLUMN', newColumn: { title, icon } });
        setTitle('');
        setIcon('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            <label>
                Title: <TextInput value={title} onChange={e => setTitle(e.target.value)} />            </label>
            <label>
                Icon: <TextInput value={icon} onChange={e => setIcon(e.target.value)} />            </label>
            <Button>Add column</Button>
        </form>
    );
};

export default ColumnForm;
