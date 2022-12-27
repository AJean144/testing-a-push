import Container from '../styles/Container';
import {
  StyledHeader,
  MainHeading,
  Nav,
  Summary,
} from '../styles/Header/Header';

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <MainHeading>TST FE Exercise</MainHeading>
          <MainHeading>Thierry Valbrun</MainHeading>
        </Nav>
        <Summary>
          <div>
            <h1>Summary</h1>
            <p>
              I am a passionate developer translating inspired concepts into
              qualified accomplishments. Detail-oriented problem-solver with
              proficiency in the art of communication. Self- motivator with the
              desire to learn.
            </p>
          </div>
        </Summary>
      </Container>
    </StyledHeader>
  );
};

export default Header;