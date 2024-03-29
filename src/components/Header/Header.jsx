import { formatDate } from '../../helpers/formatDate';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>mquix NEWS</h1>
            <p className={styles.date}>{formatDate(new Date())}</p>
        </header>
    );
};

export { Header };
