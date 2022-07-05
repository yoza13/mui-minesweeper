import * as React from "react";
import { Box, Button, Typography } from "@mui/material";
import GameContext from "../GameContext";

export const Skill: React.FC = () => {
  const settings = ["beginner", "intermediate", "expert"];
  const { skillLevel, setSkillLevel, resetTimer } =
    React.useContext(GameContext);
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="body1">Select Skill Level</Typography>
      {settings.map((set) => {
        return (
          <Button
            key={set}
            variant={skillLevel.toLowerCase() === set ? "outlined" : "text"}
            onClick={() => {
              resetTimer();
              setSkillLevel(set);
            }}
          >
            {set}
          </Button>
        );
      })}
    </Box>
  );
};
