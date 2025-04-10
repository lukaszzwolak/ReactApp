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
                {props.cards.map(card => <Card key={card.id} title={card.title} />)}
            </ul>
            <CardForm action={card => props.action(card, props.id)} />
        </article>
    );
};

export default Column;