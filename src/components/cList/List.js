import styles from './List.module.scss';
import Column from '../fColumn/Column.js';
import ColumnForm from '../hColumnForm/ColumnForm.js';
import { useSelector } from 'react-redux';
import { getListById, getColumnsByList } from '../../redux/store';

const List = () => {
    const listId = 1;
    const listData = useSelector(state => getListById(state, listId));
    const columns = useSelector(state => getColumnsByList(state, listId)); // <-- dodane

    return (
        <div className={styles.list}>
            <header className={styles.header}>
                <h2 className={styles.title}>{listData.title}<span>soon!</span></h2>
            </header>
            <p className={styles.description}>{listData.description}</p>
            <section className={styles.columns}>
                {columns.map(column => (
                    <Column
                        key={column.id}
                        {...column}
                    />
                ))}
            </section>
            <ColumnForm />
        </div>
    );
};

export default List;
