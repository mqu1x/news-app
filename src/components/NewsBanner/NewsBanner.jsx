import styles from './NewsBanner.module.scss';
import { Image } from '../Image/Image';
import { formatTimeAgo } from '../../helpers/formatTimeAgo';

const NewsBanner = ({ item }) => {
    return (
        <div className={styles.banner}>
            <Image image={item?.image} />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.extra}>
                {item.author} опубликовал пост {formatTimeAgo(item.published)}
            </p>
        </div>
    );
};

export { NewsBanner };
