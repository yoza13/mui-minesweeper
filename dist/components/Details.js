import * as React from "react";
import { Box, Card, Container, IconButton, Stack, Typography, } from "@mui/material";
import TimerIcon from "@mui/icons-material/Timer";
import DoneIcon from "@mui/icons-material/Done";
import FlagIcon from "@mui/icons-material/Flag";
import SignalCellular0BarIcon from "@mui/icons-material/SignalCellular0Bar";
import GameContext from "../GameContext";
export const Details = () => {
    const { seconds, flagsMarked, cellStates, skillLevel, xFieldsCount, yFieldsCount, bombsCount, } = React.useContext(GameContext);
    const [markedCells, setMarkedCells] = React.useState(0);
    React.useEffect(() => {
        let i = 0;
        cellStates.forEach((row) => {
            row.forEach((cell) => {
                if (cell)
                    i++;
            });
        });
        setMarkedCells(i);
    }, [cellStates]);
    return (React.createElement(Container, null,
        React.createElement(Card, null,
            React.createElement(Stack, { direction: "row", sx: { justifyContent: "space-evenly", mb: 3 } },
                React.createElement(Box, null,
                    React.createElement(IconButton, { color: "primary", "aria-label": "timer", component: "span" },
                        React.createElement(TimerIcon, null)),
                    React.createElement(Typography, { variant: "caption", paragraph: true }, "Timer"),
                    React.createElement(Typography, { variant: "body1" }, new Date(seconds * 1000).toISOString().slice(14, 19))),
                React.createElement(Box, null,
                    React.createElement(IconButton, { color: "primary", "aria-label": "opened-fields", component: "span" },
                        React.createElement(DoneIcon, null)),
                    React.createElement(Typography, { variant: "caption", paragraph: true }, "Opened Fields"),
                    React.createElement(Typography, { variant: "body1" }, `${markedCells}/${xFieldsCount * yFieldsCount - bombsCount}`)),
                React.createElement(Box, null,
                    React.createElement(IconButton, { color: "primary", "aria-label": "flag-count", component: "span" },
                        React.createElement(FlagIcon, null)),
                    React.createElement(Typography, { variant: "caption", paragraph: true }, "Mines Marked"),
                    React.createElement(Typography, { variant: "body1" }, `${flagsMarked}-${bombsCount}`)),
                React.createElement(Box, null,
                    React.createElement(IconButton, { color: "primary", "aria-label": "total-cells", component: "span" },
                        React.createElement(SignalCellular0BarIcon, null)),
                    React.createElement(Typography, { variant: "caption", paragraph: true }, "Grid Size"),
                    React.createElement(Typography, { variant: "body1" }, `${xFieldsCount}x${yFieldsCount}`))))));
};
