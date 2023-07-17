// import propTypes from 'prop-types';
import css from './SheetFooter.module.css';
// import css from 'images/notepad-spring4.jpg'
import pageFooterImage from 'images/footer-image.png';

export const SheetFooter = () =>
  (<div>
    <img className={css.imgPhonebook} src={pageFooterImage} alt='page footer' />
  </div>)
