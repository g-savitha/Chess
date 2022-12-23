import styled from 'styled-components';
import * as React from 'react';

interface ChessSquareProps {
  isWhite: boolean;
}

const ChessBoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  width: 400px;
  height: 400px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: hsl(0, 0%, 100%);
  box-shadow: 0 0 2px 0 hsl(0, 0%, 0%);
`;

const ChessSquare = styled.div<ChessSquareProps>`
  border: 1px solid black;
  background-color: ${(props) =>
    props.isWhite ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 0%)'};
`;

const ChessBoard: React.FC = () => {
  const squares = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      squares.push(
        <ChessSquare key={`${i}-${j}`} isWhite={(i + j) % 2 === 0}>
          {/* Add chess piece component here */}
        </ChessSquare>
      );
    }
  }

  return <ChessBoardContainer>{squares}</ChessBoardContainer>;
};

export default ChessBoard;
