import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';


const Card = props => {
    const dispatch = useDispatch();

    const handleToggleFavorite = () => {
        dispatch(toggleCardFavorite(props.id));
    };

    const handleRemoveCard = () => {
        dispatch(removeCard(props.id));
    };


    return (
        <li className={styles.card}>
            <span>{props.title}</span>
            <div>
                <button onClick={handleToggleFavorite} className={styles.favoriteBtn}>
                    <i className={clsx('fa', props.isFavorite ? 'fa-star' : 'fa-star-o')} />
                </button>
                <button onClick={handleRemoveCard} className={styles.deleteBtn}>
                    <i className="fa fa-trash" />
                </button>
            </div>
        </li>
    );
};

export default Card;
