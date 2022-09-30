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
          <Link offset="200" href="#home">
            Home
          </Link>
        </li>
        <li>
          <Link offset="100" href="#about">
            About
          </Link>
        </li>
        <li>
          <Link offset="0" href="#cases">
            Cases
          </Link>
        </li>
        <li>
          <Link offset="100" href="#blog">
            Blog
          </Link>
        </li>
        <li>
          <Link offset="100" href="#contact">
            Contact
          </Link>
        </li>
      </NavigationList>
    </NavigationContainer>
  );
}
