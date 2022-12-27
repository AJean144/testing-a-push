import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: #4e91da;
`;

export const MainHeading = styled.h1`
  font-size: 24px;
  font-weight: 700;
  padding: 0 60px;
  color: #fff;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const Summary = styled.div`
  display: flex;
  text-align: center;
  padding: 5px 60px;
  color: #fff;
`;