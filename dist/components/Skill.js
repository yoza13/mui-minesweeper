import * as React from "react";
import { Box, Button, Typography } from "@mui/material";
import GameContext from "../GameContext";
export const Skill = () => {
    const settings = [
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
    const { skillLevel, setSkillLevel, resetTimer } = React.useContext(GameContext);
    return (React.createElement(Box, { sx: { textAlign: "center" } },
        React.createElement(Typography, { variant: "body1" }, "Select Skill Level"),
        settings.map((set) => {
            return (React.createElement(Button, { key: set.level, variant: skillLevel.toLowerCase() === set.level ? "outlined" : "text", onClick: () => {
                    resetTimer();
                    setSkillLevel(set.level);
                } }, set.level));
        })));
};
