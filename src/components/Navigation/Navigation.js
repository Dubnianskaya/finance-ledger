import {
  NavigationContainer,
  NavigationList,
  Link,
} from './Navigation.styled';

export function Navigation() {
  return (
    <NavigationContainer>
      <NavigationList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Cases</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </NavigationList>
    </NavigationContainer>
  );
}
