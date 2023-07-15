import { Outlet } from 'react-router-dom';
import {
  Header,
  Container,
  StyledLink,
  NavUlHeader,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <NavUlHeader>
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="/movies">Movies</StyledLink>
              </li>
            </NavUlHeader>
          </nav>
        </Container>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default SharedLayout;
