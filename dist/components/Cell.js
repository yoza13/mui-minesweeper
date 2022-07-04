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
exports.Cell = void 0;
var React = __importStar(require("react"));
var material_1 = require("@mui/material");
var Adb_1 = __importDefault(require("@mui/icons-material/Adb"));
var Tour_1 = __importDefault(require("@mui/icons-material/Tour"));
var GameContext_1 = __importDefault(require("../GameContext"));
var Cell = function (_a) {
    var value = _a.value, xCoord = _a.xCoord, yCoord = _a.yCoord, lostGame = _a.lostGame, flagged = _a.flagged, revealed = _a.revealed, updateFlagsBoard = _a.updateFlagsBoard, iconClass = _a.iconClass, checkAdjacentCells = _a.checkAdjacentCells;
    var _b = React.useContext(GameContext_1.default), cellStates = _b.cellStates, setCellStates = _b.setCellStates;
    var _c = React.useState(false), bombClicked = _c[0], setBombClicked = _c[1];
    console.log(typeof xCoord, typeof yCoord);
    var checkValue = function () {
        if (value === 0) {
            checkAdjacentCells(xCoord, yCoord);
        }
        else if (value === -1) {
            lostGame();
            setBombClicked(true);
        }
    };
    var clickedCell = function (click) {
        if (click === "click") {
            updateCellStates(xCoord, yCoord);
            checkValue();
        }
        else if (click === "contextmenu") {
            updateFlagsBoard(xCoord, yCoord, !flagged);
        }
    };
    var updateCellStates = function (x, y) {
        var updatedCellStates = __spreadArray([], cellStates, true);
        updatedCellStates[x][y] = true;
        setCellStates(updatedCellStates);
    };
    var showValue = function () {
        return revealed === true ? (React.createElement(material_1.Box, { component: "span", sx: { color: iconClass } }, value === -1 ? React.createElement(Adb_1.default, null) : value)) : (React.createElement(material_1.Box, null, "\u00A0"));
    };
    return (React.createElement(material_1.Button, { variant: "outlined", id: "".concat(xCoord, "-").concat(yCoord), onClick: function (event) {
            event.preventDefault();
            clickedCell(event.type);
        }, onContextMenu: function (event) {
            event.preventDefault();
            clickedCell(event.type);
        }, disabled: bombClicked ? true : false }, flagged === true ? React.createElement(Tour_1.default, null) : showValue()));
};
exports.Cell = Cell;
//# sourceMappingURL=Cell.js.map