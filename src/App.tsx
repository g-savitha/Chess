import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/globals';

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  color: palevioletred;
  margin-bottom: 1.2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ChessBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  width: 400px;
  height: 400px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: hsl(0, 0%, 100%);
  box-shadow: 0 0 2px 0 hsl(0, 0%, 0%);
  & > div {
    border: 1px solid black;
    background-color: hsl(0, 0%, 100%);
    &:nth-child(odd) {
      background-color: hsl(0, 0%, 0%);
    }
  }
`;
const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Title>Chess</Title>
        <ChessBoard />
      </Wrapper>
    </>
  );
};

export default App;
