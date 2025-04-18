import styles from './Column.module.scss';
import Card from '../iCard/Card';
import CardForm from '../jCardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = props => {
    const cards = useSelector(state =>
        state.cards.filter(card =>
            card.columnId === props.id));

    return (
        <article className={styles.column}>
            <h2 className={styles.title}>
                <span className={styles.icon + ' fa fa-' + props.icon}></span>
                {props.title}
            </h2>

            <ul className={styles.cards}>
                {cards.map(card => (
                    <Card
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        onRemove={(cardId) => props.removeCard(cardId, props.id)}
                    />
                ))}
            </ul>

            <button
                className={styles.removeButton}
                onClick={() => props.removeColumn(props.id)}
            >
                ×
            </button>

            <CardForm columnId={props.id} action={props.addCard} />
        </article>
    );
};

export default Column;
