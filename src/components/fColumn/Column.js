import styles from './Column.module.scss';
import Card from '../iCard/Card';
import CardForm from '../jCardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/cardsRedux';

const Column = props => {
    const cards = useSelector(state => getFilteredCards(state, props.id));

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
                        isFavorite={card.isFavorite}
                    />
                ))}
            </ul>

            <CardForm columnId={props.id} />
        </article>
    );
};

export default Column;
