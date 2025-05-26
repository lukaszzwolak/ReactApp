import styles from './ListForm.module.scss';
import { useState } from 'react';
import Button from '../eButton/Button';
import TextInput from '../dTextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';

const ListForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description }));
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.listForm}>
            <label>
                <span>Title:</span>
                <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            </label>

            <label>
                <span>Description:</span>
                <TextInput value={description} onChange={e => setDescription(e.target.value)} />
            </label>

            <Button>Add list</Button>
        </form>
    );
};

export default ListForm;
