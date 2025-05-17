import PageTitle from '../mPageTitle/PageTitle';
import styles from './Page.module.scss';

const NotFound = () => {
    return (
        <div className={styles.wrapper}>
            <PageTitle>404 Not Found</PageTitle>
        </div>
    );
};

export default NotFound;
