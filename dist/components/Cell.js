import * as React from "react";
import { Box, Button } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import TourIcon from "@mui/icons-material/Tour";
import GameContext from "../GameContext";
export const Cell = ({ value, xCoord, yCoord, lostGame, flagged, revealed, updateFlagsBoard, iconClass, checkAdjacentCells, }) => {
    const { cellStates, setCellStates } = React.useContext(GameContext);
    const [bombClicked, setBombClicked] = React.useState(false);
    console.log(typeof xCoord, typeof yCoord);
    const checkValue = () => {
        if (value === 0) {
            checkAdjacentCells(xCoord, yCoord);
        }
        else if (value === -1) {
            lostGame();
            setBombClicked(true);
        }
    };
    const clickedCell = (click) => {
        if (click === "click") {
            updateCellStates(xCoord, yCoord);
            checkValue();
        }
        else if (click === "contextmenu") {
            updateFlagsBoard(xCoord, yCoord, !flagged);
        }
    };
    const updateCellStates = (x, y) => {
        const updatedCellStates = [...cellStates];
        updatedCellStates[x][y] = true;
        setCellStates(updatedCellStates);
    };
    const showValue = () => {
        return revealed === true ? (React.createElement(Box, { component: "span", sx: { color: iconClass } }, value === -1 ? React.createElement(AdbIcon, null) : value)) : (React.createElement(Box, null, "\u00A0"));
    };
    return (React.createElement(Button, { variant: "outlined", id: `${xCoord}-${yCoord}`, onClick: (event) => {
            event.preventDefault();
            clickedCell(event.type);
        }, onContextMenu: (event) => {
            event.preventDefault();
            clickedCell(event.type);
        }, disabled: bombClicked ? true : false }, flagged === true ? React.createElement(TourIcon, null) : showValue()));
};
