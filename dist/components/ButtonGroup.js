import * as React from "react";
import { Button, Stack } from "@mui/material";
import GameContext from "../GameContext";
export const ButtonGroup = () => {
    const { gameState, setNewGame, resetGame, resetTimer, seconds, toggle, setPauseButtonClicked, pauseButtonClicked, } = React.useContext(GameContext);
    const showPlayAgain = gameState === "lost" || gameState === "won";
    const showPauseButton = !pauseButtonClicked && seconds > 0;
    const showContinue = pauseButtonClicked;
    return (React.createElement(Stack, { sx: { width: "50%", margin: "auto", marginBottom: "16px" } },
        showPlayAgain && (React.createElement(Button, { variant: "contained", onClick: () => {
                setNewGame(true);
                resetGame();
                resetTimer();
            }, sx: { mb: 1 } }, "Play Again")),
        showPauseButton && !showPlayAgain && (React.createElement(Button, { variant: "contained", onClick: () => {
                toggle();
                setPauseButtonClicked(true);
            }, sx: { mb: 1 } }, "Pause")),
        showContinue && (React.createElement(Button, { variant: "contained", onClick: () => {
                toggle();
                setPauseButtonClicked(false);
            }, sx: { mb: 1 } }, "Continue"))));
};
