// import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    if (form.elements.email.value === '') {
      return alert('field "email" is missing data');
    }
    if (form.elements.password.value === '') {
      return alert('field "password" is missing data');
    }
    
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input
          className={css.formInput}
          type="email"
          name="email"
          placeholder="Enter email"
        />
      </label>
      <label className={css.label}>
        Password
        <input
          className={css.formInput}
          type="password"
          name="password"
          placeholder="Enter password"
        />
      </label>

      <button className={css.formBtn} type="submit">
        Log In
      </button>
      <div></div>
    </form>
  );
};

// LoginForm.propTypes = {
//   handleSubmit: propTypes.func.isRequired,
// };