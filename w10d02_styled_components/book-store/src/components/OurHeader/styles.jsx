import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  position: fixed;
  top: 0;
  height: 100px;
  z-index: 100;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 20px;
  align-items: baseline;
  ${Wrapper} & {
    flex-basis: 50%;
  }
`;

export const Title = styled.h2`
  padding: 20px 20px 10px 20px;
  /* color: #252525; */
  color: ${props => props.theme.header.palette.title};
  font-weight: 500;
  ${Wrapper} > & {
    flex-basis: 50%;
    font-size: 28px;
  }
`

export const NavLink = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  color: ${props => props.theme.navLink.palette.text};
  &:hover {
    color: ${props => props.theme.navLink.palette.hoverText};
  }
`

export const NavButton = styled(Link)`
  background-color: ${props => props.theme.navButton.palette.bg};
  color: ${props => props.theme.navButton.palette.text};
  border: 2px solid ${props => props.theme.navButton.palette.border};
  padding: 10px 15px;
  border-radius: 3px;
  text-decoration: none;
`;

export const NavButtonDisabled = styled(NavButton)`
  cursor: not-allowed;
  background-color: lightgray;
  border-color: lightgray;
`;

export const ThemeButton = styled.button`
  background: none;
  color: #252525;
  border: none;
  color: ${props => props.theme.header.palette.buttonText};
`