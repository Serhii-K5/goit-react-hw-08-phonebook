import css from './SheetFooter.module.css';
import pageFooterImage from 'images/footer-image.png';

export const SheetFooter = () =>
  (<div>
    <img className={css.imgPhonebook} src={pageFooterImage} alt='page footer' />
  </div>)
