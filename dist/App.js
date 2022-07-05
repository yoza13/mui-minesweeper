import * as React from "react";
import { Alert, AlertTitle, Button, Card, CardActions, CardHeader, Container, Popover, Typography, } from "@mui/material";
import { useStyles } from "./useStyles";
import { Panel } from "./components/Panel";
import { GameContextProvider } from "./GameContext";
import { Skill } from "./components/Skill";
import { Details } from "./components/Details";
import { ButtonGroup } from "./components/ButtonGroup";
export const Minesweeper = ({ xFieldsCount = 8, yFieldsCount = 8, bombsCount = 10, }) => {
    const classes = useStyles();
    const [seconds, setSeconds] = React.useState(0);
    const [isActive, setIsActive] = React.useState(false);
    const [gameState, setGameState] = React.useState("new");
    const [flagsMarked, setFlagsMarked] = React.useState(0);
    const [newGame, setNewGame] = React.useState(false);
    const [cellStates, setCellStates] = React.useState([]);
    const [skillLevel, setSkillLevel] = React.useState("beginner");
    const [pauseButtonClicked, setPauseButtonClicked] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    function toggle() {
        setIsActive(!isActive);
    }
    function resetTimer() {
        setSeconds(0);
        setIsActive(false);
    }
    const resetGame = () => {
        setGameState("new");
        setFlagsMarked(0);
    };
    React.useEffect(() => {
        let interval = 0;
        if (isActive) {
            interval = window.setInterval(() => {
                setSeconds((seconds) => seconds + 1);
            }, 1000);
        }
        else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);
    return (React.createElement(GameContextProvider, { value: {
            toggle,
            resetTimer,
            seconds,
            gameState,
            setGameState,
            flagsMarked,
            setFlagsMarked,
            newGame,
            setNewGame,
            resetGame,
            cellStates,
            setCellStates,
            skillLevel,
            setSkillLevel,
            isActive,
            pauseButtonClicked,
            setPauseButtonClicked,
            xFieldsCount,
            yFieldsCount,
            bombsCount,
        } },
        React.createElement(Container, { className: classes.appContainer },
            React.createElement(Card, { raised: true, className: classes.contentBox },
                React.createElement(Alert, { severity: "warning", className: classes.gameAlert },
                    React.createElement(AlertTitle, null, "Warning"),
                    "This game requires the use of right click for mines selection. So, it is not mobile or tablet compatible. So if you are using any of those devices, please proceed with caution"),
                React.createElement(Card, null,
                    React.createElement(CardHeader, { title: "Minesweeper", subheader: "Select the skill level and continue to play the game." }),
                    React.createElement(CardActions, null,
                        React.createElement(Button, { size: "small", onClick: (event) => setAnchorEl(event.currentTarget), "aria-describedby": "directions" }, "How To Play")),
                    React.createElement(Popover, { id: "directions", open: Boolean(anchorEl), anchorEl: anchorEl, onClose: () => setAnchorEl(null), anchorOrigin: {
                            vertical: "bottom",
                            horizontal: "left",
                        } },
                        React.createElement(Typography, { sx: { p: 2 }, align: "center" }, "To Play:"),
                        React.createElement(Typography, { sx: { p: 2 } }, "Click on a cell to reveal. When a cell reveals a number, this number indicates the number of adjacent mines. Right click on a cell to flag a mine."),
                        React.createElement(Typography, { sx: { p: 2 }, align: "center" }, "TO WIN:"),
                        React.createElement(Typography, { sx: { p: 2 } }, "Reveal all the cells that do not contain mines!"),
                        React.createElement(Typography, { sx: { p: 2 }, align: "center" }, "Change Difficulty"),
                        React.createElement(Typography, { sx: { p: 2 } }, "To change the level of difficulty, toggle between the 3 options provided (Beginner, Intermediate and Expert)")),
                    React.createElement(Skill, null),
                    React.createElement(Details, null),
                    gameState === "lost" && (React.createElement(Alert, { severity: "error" },
                        React.createElement(AlertTitle, null, "Error"),
                        "Sorry, you lost, please click play again to try again !!!!")),
                    gameState === "won" && (React.createElement(Alert, { variant: "filled", severity: "success" },
                        React.createElement(AlertTitle, null, "Success"),
                        "Congrats, you won !!!!")),
                    React.createElement(Panel, null),
                    React.createElement(ButtonGroup, null))))));
};
