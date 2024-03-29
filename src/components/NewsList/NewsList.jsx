import styles from './NewsList.module.scss';
import { NewsItem } from '../NewsItem/NewsItem';

const NewsList = ({ news }) => {
    return (
        <ul className={styles.list}>
            {news.map((item) => {
                return <NewsItem key={item.id} item={item} />;
            })}
        </ul>
    );
};

export { NewsList };
