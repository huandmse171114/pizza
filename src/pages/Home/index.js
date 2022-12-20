import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Banner from './components/Banner';
import Ordering from './components/Ordering';
import Specialty from './components/Specialty';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Banner />
            <Ordering />
            <Specialty />
        </div>
    );
}

export default Home;
