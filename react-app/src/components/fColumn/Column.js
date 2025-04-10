import styles from './Column.module.scss'
import Card from '../iCard/Card';
import CardForm from '../jCardForm/CardForm';

const Column = props => {
    return (
        <article className={styles.column}>
            <h2 className={styles.title}>
                <span
                    className={styles.icon + ' fa fa-' + props.icon}></span>
                {props.title}
            </h2>


            <ul className={styles.cards}>
                {props.cards.map(card => (
                    <Card
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        onRemove={(cardId) => props.removeCard(cardId, props.id)}
                    />
                ))}
            </ul>
            <CardForm columnId={props.id} action={props.addCard} />
        </article>
    );
};

export default Column;