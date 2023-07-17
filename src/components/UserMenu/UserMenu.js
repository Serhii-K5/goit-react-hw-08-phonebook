import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../hooks';
import css from './UserMenu.module.css';
// import LoginIcon from '@mui/icons-material/Login';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>
        Welcome, <span className={css.logInUser}>{user.name}</span>
      </p>
      <button
        className={css.btnLogin}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
        <span class="material-symbols-outlined">login</span>
        {/* <span class="material-symbols-outlined">{LoginIcon}</span> */}
      </button>
    </div>
  );
};
