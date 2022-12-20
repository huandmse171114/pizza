import classNames from 'classnames/bind';
import styles from './Ordering.module.scss';
import images from '../../../../assets/images';

const cx = classNames.bind(styles);

function Ordering() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('ordering-content')}>
                <div
                    className={`${cx('ordering-order')} ${cx(
                        'ordering-section',
                    )} `}
                >
                    <div className={cx('section-icon')}>
                        <img src={images.orderImg} alt=""></img>
                    </div>
                    <h4 className={cx('section-heading')}>Order your food</h4>
                    <p className={cx('section-desc')}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eius-Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eius-Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit, sed do
                        eius-
                    </p>
                </div>
                <div
                    className={`${cx('ordering-delivery')} ${cx(
                        'ordering-section',
                    )} `}
                >
                    <div className={cx('section-icon')}>
                        <img src={images.deliveryImg} alt=""></img>
                    </div>
                    <h4 className={cx('section-heading')}>
                        Delivery or pick up
                    </h4>
                    <p className={cx('section-desc')}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eius-Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eius-Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit, sed do
                        eius-
                    </p>
                </div>
                <div
                    className={`${cx('ordering-receipe')} ${cx(
                        'ordering-section',
                    )} `}
                >
                    <div className={cx('section-icon')}>
                        <img src={images.receipeImg} alt=""></img>
                    </div>
                    <h4 className={cx('section-heading')}>Delicious receipe</h4>
                    <p className={cx('section-desc')}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eius-Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit, sed do eius-Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit, sed do
                        eius-
                    </p>
                </div>
            </div>
            <div className={cx('ordering-footer')}>
                <img src={images.separatorDown} alt=""></img>
            </div>
        </div>
    );
}

export default Ordering;
