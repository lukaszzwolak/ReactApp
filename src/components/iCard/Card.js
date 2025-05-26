import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = props => {
    const dispatch = useDispatch();

    const handleToggleFavorite = () => {
        dispatch(toggleCardFavorite(props.id));
    };

    return (
        <li className={styles.card}>
            <span>{props.title}</span>
            <button onClick={handleToggleFavorite} className={styles.favoriteBtn}>
                <i className={clsx('fa', props.isFavorite ? 'fa-star' : 'fa-star-o')} />
            </button>
        </li>
    );
};

export default Card;
