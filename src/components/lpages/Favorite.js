import styles from './Page.module.scss';
import PageTitle from '../mPageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';
import Card from '../iCard/Card';

const Favorite = () => {
    const favoriteCards = useSelector(getFavoriteCards);

    if (favoriteCards.length === 0) {
        return (
            <div className={styles.wrapper}>
                <PageTitle>FAVORITE</PageTitle>
            </div>
        );
    }

    return (
        <div className={styles.wrapper}>
            <PageTitle>Favorite</PageTitle>
            <ul className={styles.cardsList}>
                {favoriteCards.map(card => (
                    <Card key={card.id} {...card} />
                ))}
            </ul>

        </div>
    );
};

export default Favorite;
