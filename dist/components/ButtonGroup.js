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
exports.ButtonGroup = void 0;
var React = __importStar(require("react"));
var material_1 = require("@mui/material");
var GameContext_1 = __importDefault(require("../GameContext"));
var ButtonGroup = function () {
    var _a = React.useContext(GameContext_1.default), gameState = _a.gameState, setNewGame = _a.setNewGame, resetGame = _a.resetGame, resetTimer = _a.resetTimer, seconds = _a.seconds, toggle = _a.toggle, setPauseButtonClicked = _a.setPauseButtonClicked, pauseButtonClicked = _a.pauseButtonClicked;
    var showPlayAgain = gameState === "lost" || gameState === "won";
    var showPauseButton = !pauseButtonClicked && seconds > 0;
    var showContinue = pauseButtonClicked;
    return (React.createElement(material_1.Stack, { sx: { width: "50%", margin: "auto", marginBottom: "16px" } },
        showPlayAgain && (React.createElement(material_1.Button, { variant: "contained", onClick: function () {
                setNewGame(true);
                resetGame();
                resetTimer();
            }, sx: { mb: 1 } }, "Play Again")),
        showPauseButton && !showPlayAgain && (React.createElement(material_1.Button, { variant: "contained", onClick: function () {
                toggle();
                setPauseButtonClicked(true);
            }, sx: { mb: 1 } }, "Pause")),
        showContinue && (React.createElement(material_1.Button, { variant: "contained", onClick: function () {
                toggle();
                setPauseButtonClicked(false);
            }, sx: { mb: 1 } }, "Continue"))));
};
exports.ButtonGroup = ButtonGroup;
//# sourceMappingURL=ButtonGroup.js.map