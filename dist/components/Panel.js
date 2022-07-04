"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Panel = void 0;
var React = __importStar(require("react"));
var material_1 = require("@mui/material");
var GameContext_1 = __importDefault(require("../GameContext"));
var settings_json_1 = __importDefault(require("../content/settings.json"));
var helper_1 = require("./helper");
var Cell_1 = require("./Cell");
var settings = settings_json_1.default;
var Panel = function () {
    var _a = React.useContext(GameContext_1.default), setGameState = _a.setGameState, setFlagsMarked = _a.setFlagsMarked, gameState = _a.gameState, newGame = _a.newGame, resetGame = _a.resetGame, cellStates = _a.cellStates, setCellStates = _a.setCellStates, toggle = _a.toggle, skillLevel = _a.skillLevel;
    var _b = React.useState([]), boardValues = _b[0], setBoardValues = _b[1];
    var _c = React.useState([]), flagsBoard = _c[0], setFlagsBoard = _c[1];
    var _d = React.useState([]), minePositions = _d[0], setMinePositions = _d[1];
    var createBoard = function (rows, columns) {
        var board = [];
        for (var i = 1; i <= rows; i++) {
            var row = [];
            for (var j = 1; j <= columns; j++) {
                row.push(false);
            }
            board.push(row);
        }
        return board;
    };
    var createBoardVal = function (rows, columns) {
        var board = [];
        for (var i = 1; i <= rows; i++) {
            var row = [];
            for (var j = 1; j <= columns; j++) {
                row.push(0);
            }
            board.push(row);
        }
        return board;
    };
    var countMines = function (x, y, boardValues) {
        var rowsGrid = settings[skillLevel].xFieldsCount - 1;
        var columnsGrid = settings[skillLevel].yFieldsCount - 1;
        var rows = [x - 1, x, x + 1];
        var cols = [y - 1, y, y + 1];
        var adjacentMines = 0;
        rows.forEach(function (row) {
            if (row >= 0 && row <= rowsGrid) {
                cols.forEach(function (col) {
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
    var boardSetup = function () {
        var rows = settings[skillLevel].xFieldsCount;
        var columns = settings[skillLevel].yFieldsCount;
        var mines = settings[skillLevel].bombsCount;
        var boardVal = createBoardVal(rows, columns);
        var cellStates = createBoard(rows, columns);
        var flagsBoard = createBoard(rows, columns);
        var mineCount = mines;
        var initialMinePositions = [];
        var _loop_1 = function () {
            var i = (0, helper_1.getRandomInteger)(1, rows) - 1;
            var j = (0, helper_1.getRandomInteger)(1, columns) - 1;
            if (!initialMinePositions.some(function (position) { return position === "".concat(i, ",").concat(j); })) {
                boardVal[i][j] = -1;
                initialMinePositions.push("".concat(i, ",").concat(j));
                mineCount--;
            }
        };
        while (mineCount > 0) {
            _loop_1();
        }
        for (var x = 0; x < rows; x++) {
            for (var y = 0; y < columns; y++) {
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
    var lostGame = function () {
        var updatedCellStates = __spreadArray([], cellStates, true);
        minePositions.forEach(function (position) {
            var x = parseInt(position.split(",")[0]);
            var y = parseInt(position.split(",")[1]);
            updatedCellStates[x][y] = true;
        });
        setCellStates(updatedCellStates);
        setGameState("lost");
    };
    var countFlagsMarked = function (updatedFlagsBoard) {
        var flagsMarked = updatedFlagsBoard.reduce(function (flagsMarked, row) {
            var rowValue = row.reduce(function (acc, currentValue) {
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
    var updateFlagsBoard = function (x, y, flaggedState) {
        var updatedFlagsBoard = __spreadArray([], flagsBoard, true);
        updatedFlagsBoard[x][y] = flaggedState;
        countFlagsMarked(updatedFlagsBoard);
    };
    var checkAdjacentCells = function (x, y) {
        var rows = [x - 1, x, x + 1];
        var cols = [y - 1, y, y + 1];
        var xFieldsCount = settings[skillLevel].xFieldsCount;
        var yFieldsCount = settings[skillLevel].yFieldsCount;
        var updatedCellState = __spreadArray([], cellStates, true);
        rows.forEach(function (row) {
            if (row >= 0 && row <= xFieldsCount - 1) {
                cols.forEach(function (col) {
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
    var flagCellsWithMines = function () {
        var updatedFlagsBoard = __spreadArray([], flagsBoard, true);
        minePositions.forEach(function (position) {
            var x = position.split(",")[0];
            var y = position.split(",")[1];
        });
        setFlagsMarked(minePositions.length);
        setFlagsBoard(updatedFlagsBoard);
    };
    var checkForWin = function () {
        var rows = settings["beginner"].xFieldsCount;
        var columns = settings["beginner"].yFieldsCount;
        var mines = settings["beginner"].bombsCount;
        var updatedCells = __spreadArray([], cellStates, true);
        var revealedCells = updatedCells.reduce(function (cellsRevealed, row) {
            var rowValue = row.reduce(function (acc, currentValue) {
                if (currentValue === true) {
                    return acc + 1;
                }
                else {
                    return acc;
                }
            }, 0);
            return cellsRevealed + rowValue;
        }, 0);
        var totalCells = rows * columns - mines;
        if (revealedCells === totalCells) {
            setGameState("won");
            flagCellsWithMines();
            toggle();
        }
    };
    var renderBoard = function () {
        var x = -1;
        return (React.createElement(material_1.Container, null, boardValues.map(function (row, ind) {
            x++;
            var y = -1;
            return (React.createElement(material_1.Box, { key: ind }, row.map(function (cell, index) {
                y++;
                var cellClass = {
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
                return (React.createElement(Cell_1.Cell, { key: index, xCoord: x, yCoord: y, value: cell, iconClass: cellClass[cell], lostGame: lostGame, updateFlagsBoard: updateFlagsBoard, checkAdjacentCells: checkAdjacentCells, revealed: cellStates[x][y], flagged: flagsBoard[x][y] }));
            })));
        })));
    };
    React.useEffect(function () {
        boardSetup();
    }, []);
    React.useEffect(function () {
        boardSetup();
    }, [skillLevel]);
    React.useEffect(function () {
        if (gameState !== "won") {
            checkForWin();
        }
    }, [cellStates]);
    React.useEffect(function () {
        if (newGame === true) {
            resetGame();
            boardSetup();
        }
    }, [newGame]);
    return (React.createElement(material_1.Container, { component: "main", sx: { mt: 2, mb: 4 }, onClick: function () { return toggle(); } }, renderBoard()));
};
exports.Panel = Panel;
//# sourceMappingURL=Panel.js.map