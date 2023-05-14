import styled from 'styled-components';

export const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Main = styled.main`
  flex-grow: 1;
  background-color: ${({theme}) => theme.palette.background.black};
`;
