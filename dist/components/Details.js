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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Details = void 0;
var React = __importStar(require("react"));
var material_1 = require("@mui/material");
var Timer_1 = __importDefault(require("@mui/icons-material/Timer"));
var Done_1 = __importDefault(require("@mui/icons-material/Done"));
var Flag_1 = __importDefault(require("@mui/icons-material/Flag"));
var SignalCellular0Bar_1 = __importDefault(require("@mui/icons-material/SignalCellular0Bar"));
var GameContext_1 = __importDefault(require("../GameContext"));
var settings_json_1 = __importDefault(require("../content/settings.json"));
var settings = settings_json_1.default;
var Details = function () {
    var _a = React.useContext(GameContext_1.default), seconds = _a.seconds, flagsMarked = _a.flagsMarked, cellStates = _a.cellStates, skillLevel = _a.skillLevel;
    var _b = React.useState(0), markedCells = _b[0], setMarkedCells = _b[1];
    React.useEffect(function () {
        var i = 0;
        cellStates.forEach(function (row) {
            row.forEach(function (cell) {
                if (cell)
                    i++;
            });
        });
        setMarkedCells(i);
    }, [cellStates]);
    return (React.createElement(material_1.Container, null,
        React.createElement(material_1.Card, null,
            React.createElement(material_1.Stack, { direction: "row", sx: { justifyContent: "space-evenly", mb: 3 } },
                React.createElement(material_1.Box, null,
                    React.createElement(material_1.IconButton, { color: "primary", "aria-label": "timer", component: "span" },
                        React.createElement(Timer_1.default, null)),
                    React.createElement(material_1.Typography, { variant: "caption", paragraph: true }, "Timer"),
                    React.createElement(material_1.Typography, { variant: "body1" }, new Date(seconds * 1000).toISOString().slice(14, 19))),
                React.createElement(material_1.Box, null,
                    React.createElement(material_1.IconButton, { color: "primary", "aria-label": "opened-fields", component: "span" },
                        React.createElement(Done_1.default, null)),
                    React.createElement(material_1.Typography, { variant: "caption", paragraph: true }, "Opened Fields"),
                    React.createElement(material_1.Typography, { variant: "body1" }, "".concat(markedCells, "/").concat(settings[skillLevel].xFieldsCount *
                        settings[skillLevel].yFieldsCount -
                        settings[skillLevel].bombsCount))),
                React.createElement(material_1.Box, null,
                    React.createElement(material_1.IconButton, { color: "primary", "aria-label": "flag-count", component: "span" },
                        React.createElement(Flag_1.default, null)),
                    React.createElement(material_1.Typography, { variant: "caption", paragraph: true }, "Mines Marked"),
                    React.createElement(material_1.Typography, { variant: "body1" }, "".concat(flagsMarked, "-").concat(settings[skillLevel].bombsCount))),
                React.createElement(material_1.Box, null,
                    React.createElement(material_1.IconButton, { color: "primary", "aria-label": "total-cells", component: "span" },
                        React.createElement(SignalCellular0Bar_1.default, null)),
                    React.createElement(material_1.Typography, { variant: "caption", paragraph: true }, "Grid Size"),
                    React.createElement(material_1.Typography, { variant: "body1" }, "".concat(settings[skillLevel].xFieldsCount, "x").concat(settings[skillLevel].yFieldsCount)))))));
};
exports.Details = Details;
//# sourceMappingURL=Details.js.map