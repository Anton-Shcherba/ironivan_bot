import React from 'react';
import './App.css';

const gameOfLifeIteration = (cellStates: boolean[][]): boolean[][] => {
  const numRows = cellStates.length;
  const numCols = cellStates[0].length;

  const countLiveNeighbors = (row: number, col: number): number => {
    let liveNeighbors = 0;
    for (let i = -1; i <= 1; i++) {
      const newRow = (row + i + numRows) % numRows;
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        const newCol = (col + j + numCols) % numCols;
        if (cellStates[newRow][newCol]) {
          liveNeighbors++;
        }
      }
    }
    return liveNeighbors;
  };

  const newCellStates = cellStates.map(r => [...r]);

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const liveNeighbors = countLiveNeighbors(row, col);
      if (!cellStates[row][col] && liveNeighbors === 3) newCellStates[row][col] = true;
      else if (cellStates[row][col] && (liveNeighbors < 2 || liveNeighbors > 3))
        newCellStates[row][col] = false;
    }
  }
  return newCellStates;
};

function App(): JSX.Element {
  const numRows = 20;
  const numCols = 20;

  const [cellStates, setCellStates] = React.useState<boolean[][]>(
    Array.from({ length: numRows }, () => Array(numCols).fill(false))
  );

  const updateCellState = (rowIndex: number, colIndex: number, newState?: boolean): void => {
    const updatedCellStates = [...cellStates];
    updatedCellStates[rowIndex][colIndex] =
      newState !== undefined ? newState : !cellStates[rowIndex][colIndex];
    setCellStates(updatedCellStates);
  };

  const renderTable = (): JSX.Element[] =>
    [...Array(numCols)].map((_, colIndex) => (
      <tr key={colIndex}>
        {[...Array(numRows)].map((__, rowIndex) => {
          const cellKey = `${colIndex}-${rowIndex}`;
          return (
            <td
              key={cellKey}
              data-colindex={colIndex}
              data-rowindex={rowIndex}
              className={`cell ${cellStates[colIndex][rowIndex] ? 'colored' : ''}`}
              aria-label="Сell"
            />
          );
        })}
      </tr>
    ));

  const mouseEventHandler = (event: React.MouseEvent<HTMLTableElement, MouseEvent>): void => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const td = target.closest('td');
    if (td == null) return;
    const colIndexAttr = td.getAttribute('data-colindex');
    const rowIndexAttr = td.getAttribute('data-rowindex');
    if (colIndexAttr !== null && rowIndexAttr !== null)
      updateCellState(+colIndexAttr, +rowIndexAttr);
  };

  const [timerId, setTimerId] = React.useState<NodeJS.Timer | undefined>(undefined);

  React.useEffect(() => {
    return () => clearInterval(timerId);
  }, []);

  const handleStartStopClick = () => {
    if (!timerId)
      setTimerId(
        setInterval(() => {
          setCellStates(prevCellStates => gameOfLifeIteration(prevCellStates));
        }, 200)
      );
    else {
      clearInterval(timerId);
      setTimerId(undefined);
    }
  };

  return (
    <div className="App">
      <div className="square-table-container">
        <table className="square-table" onClick={mouseEventHandler}>
          <tbody>{renderTable()}</tbody>
        </table>
      </div>
      <button onClick={handleStartStopClick}>{timerId ? 'Stop' : 'Start'}</button>
    </div>
  );
}

export default App;
