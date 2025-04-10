import styles from './Card.module.scss';

const Card = props => {
    return (
        <li className={styles.card}>
            {props.title}
            <button onClick={() => props.onRemove(props.id)} className={styles.removeBtn}>×</button>
        </li>
    );
};

export default Card;