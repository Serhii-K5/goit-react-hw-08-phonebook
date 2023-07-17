// import { propTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    if (form.elements.name.value === "") {
      return alert('field "name" is missing data')
    }
    if (form.elements.email.value === '') {
      return alert('field "email" is missing data');
    }
    if (form.elements.password.value === '') {
      return alert('field "password" is missing data');
    }
    
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input
          className={css.formInput}
          type="text"
          name="name"
          placeholder="Enter user name"
        />
      </label>
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
        Registration
      </button>
    </form>
  );
};

// RegisterForm.propTypes = {
//   handleSubmit: propTypes.func.isRequired,
// };
