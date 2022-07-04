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
exports.Skill = void 0;
var React = __importStar(require("react"));
var material_1 = require("@mui/material");
var GameContext_1 = __importDefault(require("../GameContext"));
var Skill = function () {
    var settings = [
        {
            level: "beginner",
            xFieldsCount: 8,
            yFieldsCount: 8,
            bombsCount: 10,
        },
        {
            level: "intermediate",
            xFieldsCount: 16,
            yFieldsCount: 16,
            bombsCount: 40,
        },
        {
            level: "expert",
            xFieldsCount: 30,
            yFieldsCount: 16,
            bombsCount: 99,
        },
    ];
    var _a = React.useContext(GameContext_1.default), skillLevel = _a.skillLevel, setSkillLevel = _a.setSkillLevel, resetTimer = _a.resetTimer;
    return (React.createElement(material_1.Box, { sx: { textAlign: "center" } },
        React.createElement(material_1.Typography, { variant: "body1" }, "Select Skill Level"),
        settings.map(function (set) {
            return (React.createElement(material_1.Button, { key: set.level, variant: skillLevel.toLowerCase() === set.level ? "outlined" : "text", onClick: function () {
                    resetTimer();
                    setSkillLevel(set.level);
                } }, set.level));
        })));
};
exports.Skill = Skill;
//# sourceMappingURL=Skill.js.map