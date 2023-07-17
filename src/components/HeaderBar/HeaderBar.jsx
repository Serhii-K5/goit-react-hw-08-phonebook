import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthenticationNav } from '../AuthenticationNav/AuthenticationNav';
import { useAuth } from '../hooks';
import css from './HeaderBar.module.css';

export const HeaderBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthenticationNav />}
    </header>
  );
};