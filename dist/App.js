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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Minesweeper = void 0;
var React = __importStar(require("react"));
var material_1 = require("@mui/material");
var useStyles_1 = require("./useStyles");
var Panel_1 = require("./components/Panel");
var GameContext_1 = require("./GameContext");
var Skill_1 = require("./components/Skill");
var Details_1 = require("./components/Details");
var ButtonGroup_1 = require("./components/ButtonGroup");
var Minesweeper = function () {
    var classes = (0, useStyles_1.useStyles)();
    var _a = React.useState(0), seconds = _a[0], setSeconds = _a[1];
    var _b = React.useState(false), isActive = _b[0], setIsActive = _b[1];
    var _c = React.useState("new"), gameState = _c[0], setGameState = _c[1];
    var _d = React.useState(0), flagsMarked = _d[0], setFlagsMarked = _d[1];
    var _e = React.useState(false), newGame = _e[0], setNewGame = _e[1];
    var _f = React.useState([]), cellStates = _f[0], setCellStates = _f[1];
    var _g = React.useState("beginner"), skillLevel = _g[0], setSkillLevel = _g[1];
    var _h = React.useState(false), pauseButtonClicked = _h[0], setPauseButtonClicked = _h[1];
    var _j = React.useState(null), anchorEl = _j[0], setAnchorEl = _j[1];
    function toggle() {
        setIsActive(!isActive);
    }
    function resetTimer() {
        setSeconds(0);
        setIsActive(false);
    }
    var resetGame = function () {
        setGameState("new");
        setFlagsMarked(0);
    };
    React.useEffect(function () {
        var interval = 0;
        if (isActive) {
            interval = window.setInterval(function () {
                setSeconds(function (seconds) { return seconds + 1; });
            }, 1000);
        }
        else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return function () { return clearInterval(interval); };
    }, [isActive, seconds]);
    return (React.createElement(GameContext_1.GameContextProvider, { value: {
            toggle: toggle,
            resetTimer: resetTimer,
            seconds: seconds,
            gameState: gameState,
            setGameState: setGameState,
            flagsMarked: flagsMarked,
            setFlagsMarked: setFlagsMarked,
            newGame: newGame,
            setNewGame: setNewGame,
            resetGame: resetGame,
            cellStates: cellStates,
            setCellStates: setCellStates,
            skillLevel: skillLevel,
            setSkillLevel: setSkillLevel,
            isActive: isActive,
            pauseButtonClicked: pauseButtonClicked,
            setPauseButtonClicked: setPauseButtonClicked,
        } },
        React.createElement(material_1.Container, { className: classes.appContainer },
            React.createElement(material_1.Card, { raised: true, className: classes.contentBox },
                React.createElement(material_1.Alert, { severity: "warning", className: classes.gameAlert },
                    React.createElement(material_1.AlertTitle, null, "Warning"),
                    "This game requires the use of right click for mines selection. So, it is not mobile or tablet compatible. So if you are using any of those devices, please proceed with caution"),
                React.createElement(material_1.Card, null,
                    React.createElement(material_1.CardHeader, { title: "Minesweeper", subheader: "Select the skill level and continue to play the game." }),
                    React.createElement(material_1.CardActions, null,
                        React.createElement(material_1.Button, { size: "small", onClick: function (event) { return setAnchorEl(event.currentTarget); }, "aria-describedby": "directions" }, "How To Play")),
                    React.createElement(material_1.Popover, { id: "directions", open: Boolean(anchorEl), anchorEl: anchorEl, onClose: function () { return setAnchorEl(null); }, anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left",
                        } },
                        React.createElement(material_1.Typography, { sx: { p: 2 }, align: "center" }, "To Play:"),
                        React.createElement(material_1.Typography, { sx: { p: 2 } }, "Click on a cell to reveal. When a cell reveals a number, this number indicates the number of adjacent mines. Right click on a cell to flag a mine."),
                        React.createElement(material_1.Typography, { sx: { p: 2 }, align: "center" }, "TO WIN:"),
                        React.createElement(material_1.Typography, { sx: { p: 2 } }, "Reveal all the cells that do not contain mines!"),
                        React.createElement(material_1.Typography, { sx: { p: 2 }, align: "center" }, "Change Difficulty"),
                        React.createElement(material_1.Typography, { sx: { p: 2 } }, "To change the level of difficulty, toggle between the 3 options provided (Beginner, Intermediate and Expert)")),
                    React.createElement(Skill_1.Skill, null),
                    React.createElement(Details_1.Details, null),
                    gameState === "lost" && (React.createElement(material_1.Alert, { severity: "error" },
                        React.createElement(material_1.AlertTitle, null, "Error"),
                        "Sorry, you lost, please click play again to try again !!!!")),
                    gameState === "won" && (React.createElement(material_1.Alert, { variant: "filled", severity: "success" },
                        React.createElement(material_1.AlertTitle, null, "Success"),
                        "Congrats, you won !!!!")),
                    React.createElement(Panel_1.Panel, null),
                    React.createElement(ButtonGroup_1.ButtonGroup, null))))));
};
exports.Minesweeper = Minesweeper;
//# sourceMappingURL=App.js.map