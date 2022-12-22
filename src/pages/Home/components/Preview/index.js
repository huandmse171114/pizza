import classNames from 'classnames/bind';
import styles from './Preview.module.scss';
import images from '../../../../assets/images';

const cx = classNames.bind(styles);

function Preview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('preview-content')}>
                <div
                    className={`${cx('preview-order')} ${cx(
                        'preview-section',
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
                    className={`${cx('preview-delivery')} ${cx(
                        'preview-section',
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
                    className={`${cx('preview-receipe')} ${cx(
                        'preview-section',
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
            <div className={cx('preview-footer')}>
                <img src={images.separatorDown} alt=""></img>
            </div>
        </div>
    );
}

export default Preview;
