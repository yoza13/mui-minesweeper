import * as React from "react";
import { Box, Container } from "@mui/material";
import GameContext from "../GameContext";
import { getRandomInteger } from "./helper";
import { Cell } from "./Cell";
export const Panel = () => {
    const { setGameState, setFlagsMarked, gameState, newGame, resetGame, cellStates, setCellStates, toggle, skillLevel, xFieldsCount, yFieldsCount, bombsCount, } = React.useContext(GameContext);
    const [boardValues, setBoardValues] = React.useState([]);
    const [flagsBoard, setFlagsBoard] = React.useState([]);
    const [minePositions, setMinePositions] = React.useState([]);
    const createBoard = (rows, columns) => {
        let board = [];
        for (let i = 1; i <= rows; i++) {
            let row = [];
            for (let j = 1; j <= columns; j++) {
                row.push(false);
            }
            board.push(row);
        }
        return board;
    };
    const createBoardVal = (rows, columns) => {
        let board = [];
        for (let i = 1; i <= rows; i++) {
            let row = [];
            for (let j = 1; j <= columns; j++) {
                row.push(0);
            }
            board.push(row);
        }
        return board;
    };
    const countMines = (x, y, boardValues) => {
        const rowsGrid = xFieldsCount - 1;
        const columnsGrid = yFieldsCount - 1;
        const rows = [x - 1, x, x + 1];
        const cols = [y - 1, y, y + 1];
        let adjacentMines = 0;
        rows.forEach((row) => {
            if (row >= 0 && row <= rowsGrid) {
                cols.forEach((col) => {
                    if (col >= 0 && col <= columnsGrid) {
                        if (boardValues[row][col] === -1) {
                            adjacentMines++;
                        }
                    }
                });
            }
        });
        return adjacentMines;
    };
    const boardSetup = () => {
        const rows = xFieldsCount;
        const columns = yFieldsCount;
        const mines = bombsCount;
        const boardVal = createBoardVal(rows, columns);
        const cellStates = createBoard(rows, columns);
        const flagsBoard = createBoard(rows, columns);
        let mineCount = mines;
        let initialMinePositions = [];
        while (mineCount > 0) {
            let i = getRandomInteger(1, rows) - 1;
            let j = getRandomInteger(1, columns) - 1;
            if (!initialMinePositions.some((position) => position === `${i},${j}`)) {
                boardVal[i][j] = -1;
                initialMinePositions.push(`${i},${j}`);
                mineCount--;
            }
        }
        for (let x = 0; x < rows; x++) {
            for (let y = 0; y < columns; y++) {
                if (boardVal[x][y] !== -1) {
                    boardVal[x][y] = countMines(x, y, boardVal);
                }
            }
        }
        setBoardValues(boardVal);
        setCellStates(cellStates);
        setFlagsBoard(flagsBoard);
        setMinePositions(initialMinePositions);
    };
    const lostGame = () => {
        const updatedCellStates = [...cellStates];
        minePositions.forEach((position) => {
            const x = parseInt(position.split(",")[0]);
            const y = parseInt(position.split(",")[1]);
            updatedCellStates[x][y] = true;
        });
        setCellStates(updatedCellStates);
        setGameState("lost");
    };
    const countFlagsMarked = (updatedFlagsBoard) => {
        const flagsMarked = updatedFlagsBoard.reduce((flagsMarked, row) => {
            const rowValue = row.reduce((acc, currentValue) => {
                if (currentValue === true) {
                    return acc + 1;
                }
                else {
                    return acc;
                }
            }, 0);
            return flagsMarked + rowValue;
        }, 0);
        setFlagsMarked(flagsMarked);
    };
    const updateFlagsBoard = (x, y, flaggedState) => {
        const updatedFlagsBoard = [...flagsBoard];
        updatedFlagsBoard[x][y] = flaggedState;
        countFlagsMarked(updatedFlagsBoard);
    };
    const checkAdjacentCells = (x, y) => {
        const rows = [x - 1, x, x + 1];
        const cols = [y - 1, y, y + 1];
        const updatedCellState = [...cellStates];
        rows.forEach((row) => {
            if (row >= 0 && row <= xFieldsCount - 1) {
                cols.forEach((col) => {
                    if (col >= 0 && col <= yFieldsCount - 1) {
                        if (cellStates[row][col] === false &&
                            flagsBoard[row][col] === false) {
                            if (boardValues[row][col] === 0) {
                                updatedCellState[row][col] = true;
                                checkAdjacentCells(row, col);
                            }
                            else if (boardValues[row][col] !== -1) {
                                updatedCellState[row][col] = true;
                            }
                        }
                    }
                });
            }
        });
        setCellStates(updatedCellState);
    };
    const flagCellsWithMines = () => {
        const updatedFlagsBoard = [...flagsBoard];
        minePositions.forEach((position) => {
            const x = position.split(",")[0];
            const y = position.split(",")[1];
            //flagsBoard[x][y] = true;
        });
        setFlagsMarked(minePositions.length);
        setFlagsBoard(updatedFlagsBoard);
    };
    const checkForWin = () => {
        const rows = xFieldsCount;
        const columns = yFieldsCount;
        const mines = bombsCount;
        const updatedCells = [...cellStates];
        const revealedCells = updatedCells.reduce((cellsRevealed, row) => {
            const rowValue = row.reduce((acc, currentValue) => {
                if (currentValue === true) {
                    return acc + 1;
                }
                else {
                    return acc;
                }
            }, 0);
            return cellsRevealed + rowValue;
        }, 0);
        const totalCells = rows * columns - mines;
        if (revealedCells === totalCells) {
            setGameState("won");
            flagCellsWithMines();
            toggle();
        }
    };
    const renderBoard = () => {
        let x = -1;
        return (React.createElement(Container, null, boardValues.map((row, ind) => {
            x++;
            let y = -1;
            return (React.createElement(Box, { key: ind }, row.map((cell, index) => {
                y++;
                const cellClass = {
                    Mine: "bomb",
                    0: "zero",
                    1: "blue",
                    2: "green",
                    3: "red",
                    4: "purple",
                    5: "magenta",
                    6: "turquoise",
                    7: "black",
                    8: "yellow",
                };
                return (React.createElement(Cell, { key: index, xCoord: x, yCoord: y, value: cell, iconClass: cellClass[cell], lostGame: lostGame, updateFlagsBoard: updateFlagsBoard, checkAdjacentCells: checkAdjacentCells, revealed: cellStates[x][y], flagged: flagsBoard[x][y] }));
            })));
        })));
    };
    React.useEffect(() => {
        boardSetup();
    }, []);
    React.useEffect(() => {
        boardSetup();
    }, [skillLevel]);
    React.useEffect(() => {
        if (gameState !== "won") {
            checkForWin();
        }
    }, [cellStates]);
    React.useEffect(() => {
        if (newGame === true) {
            resetGame();
            boardSetup();
        }
    }, [newGame]);
    return (React.createElement(Container, { component: "main", sx: { mt: 2, mb: 4 }, onClick: () => toggle() }, renderBoard()));
};
