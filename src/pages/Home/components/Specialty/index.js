import classNames from 'classnames/bind';
import styles from './Specialty.module.scss';
import images from '../../../../assets/images';

const cx = classNames.bind(styles);

function Specialty() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('specialty-content')}>
                <div className={cx('specialty-center')}>
                    <h4 className={cx('center-sub-heading')}>
                        Fresh From DSC Pizza
                    </h4>
                    <h1 className={cx('center-heading')}>Our Specialty</h1>
                </div>
                <ul className={cx('specialty-list')}>
                    <li className={cx('specialty-item')}>
                        <img
                            className={cx('specialty-item-img')}
                            src={images.specialty1}
                            alt=""
                        ></img>
                        <p className={cx('specialty-item-name')}>
                            Mexican green wave
                        </p>
                    </li>
                    <li className={cx('specialty-item')}>
                        <img
                            className={cx('specialty-item-img')}
                            src={images.specialty2}
                            alt=""
                        ></img>
                        <p className={cx('specialty-item-name')}>
                            Double cheese pizza
                        </p>
                    </li>
                    <li className={cx('specialty-item')}>
                        <img
                            className={cx('specialty-item-img')}
                            src={images.specialty3}
                            alt=""
                        ></img>
                        <p className={cx('specialty-item-name')}>
                            Margherita pizza
                        </p>
                    </li>
                </ul>
                <button className={`${cx('btn')} ${'btn-primary'} `}>
                    View more
                </button>
            </div>
        </div>
    );
}

export default Specialty;
