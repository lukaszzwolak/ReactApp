import styles from './CardForm.module.scss';
import { useState } from 'react';
import Button from '../eButton/Button';
import TextInput from '../dTextInput/TextInput';


const CardForm = props => {
    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: title }, props.columnId);
        setTitle('');
    };

    return (
        <form className={styles.cardForm} onSubmit={handleSubmit}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add card</Button>
        </form>
    );
};

export default CardForm;