import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks';
import css from './Navigation.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: #e91e63;
  }
`;

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledLink className={css.link} to="/">
        Home
      </StyledLink>
      {isLoggedIn && (
        <StyledLink className={css.link} to="/contacts">
          Contacts
        </StyledLink>
      )}
    </nav>
  );
};