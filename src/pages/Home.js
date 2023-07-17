import css from 'styles/styles.module.css';
import notepadSpring from 'images/phonebook.png';

export default function Home() {
  return (
    <div className={css.phonebookCover}>
      <img className={css.container} src={notepadSpring} alt='Phonebook' />
    </div>
  );
}