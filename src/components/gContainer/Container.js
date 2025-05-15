import styles from './Container.module.scss';

const Container = (props) => {
    return (
        <div className={styles.windowView}>
            {props.children}
        </div>
    );
};

export default Container;
