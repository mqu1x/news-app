import styles from './NewsItem.module.scss';
import { formatTimeAgo } from '../../helpers/formatTimeAgo';

const NewsItem = ({ item }) => {
    return (
        <li className={styles.item}>
            <div
                className={styles.wrapper}
                style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            <div className={styles.info}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.extra}>
                    {item.author} опубликовал пост {formatTimeAgo(item.published)}
                </p>
            </div>
        </li>
    );
};

export { NewsItem };
