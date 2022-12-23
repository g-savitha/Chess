import React from 'react';
import styled from 'styled-components';
import ChessBoard from './ChessBoard';
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
