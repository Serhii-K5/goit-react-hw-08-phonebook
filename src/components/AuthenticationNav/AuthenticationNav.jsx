import { NavLink } from 'react-router-dom';
import css from './AuthenticationNav.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: #e91e63;
  }
`;

export const AuthenticationNav = () => {
  return (
    <div>
      <StyledLink className={css.link} to="/register">
        Register
      </StyledLink>
      <StyledLink className={css.link} to="/login">
        Log In
      </StyledLink>
    </div>
  );
};