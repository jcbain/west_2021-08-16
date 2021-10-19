import { 
  Wrapper,
  Title,
  Nav,
  ThemeButton,
  NavLink,
  NavButton
} from './styles'

const Header = (props) => {
  const { theme, setTheme, className} = props;

  const handleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  return (
    <Wrapper className={className}>
      <Title>Mulder's Books</Title>
      <Nav>
        <ThemeButton  onClick={handleTheme}>{theme === 'light' ? 'L' : 'D'}</ThemeButton>
        <NavLink  to="/books">my books</NavLink>
        <NavLink to="/favorites">favorites</NavLink>
        <NavLink to="/wish">wish list</NavLink>
        <NavButton to="/login">login</NavButton>
      </Nav>
  </Wrapper>
  )
}

export default Header;