import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Banner from './components/Banner';
import Preview from './components/Preview';
import Specialty from './components/Specialty';
import Custom from './components/Custom';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <Banner />
            <Preview />
            <Specialty />
            <Custom />
        </div>
    );
}

export default Home;
