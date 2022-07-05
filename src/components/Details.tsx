import * as React from "react";
import {
  Box,
  Card,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import TimerIcon from "@mui/icons-material/Timer";
import DoneIcon from "@mui/icons-material/Done";
import FlagIcon from "@mui/icons-material/Flag";
import SignalCellular0BarIcon from "@mui/icons-material/SignalCellular0Bar";
import GameContext from "../GameContext";

export const Details: React.FC = () => {
  const {
    seconds,
    flagsMarked,
    cellStates,
    skillLevel,
    xFieldsCount,
    yFieldsCount,
    bombsCount,
  } = React.useContext(GameContext);
  const [markedCells, setMarkedCells] = React.useState<number>(0);

  React.useEffect(() => {
    let i = 0;
    cellStates.forEach((row) => {
      row.forEach((cell) => {
        if (cell) i++;
      });
    });
    setMarkedCells(i);
  }, [cellStates]);

  return (
    <Container>
      <Card>
        <Stack direction="row" sx={{ justifyContent: "space-evenly", mb: 3 }}>
          <Box>
            <IconButton color="primary" aria-label="timer" component="span">
              <TimerIcon />
            </IconButton>
            <Typography variant="caption" paragraph={true}>
              Timer
            </Typography>
            <Typography variant="body1">
              {new Date(seconds * 1000).toISOString().slice(14, 19)}
            </Typography>
          </Box>
          <Box>
            <IconButton
              color="primary"
              aria-label="opened-fields"
              component="span"
            >
              <DoneIcon />
            </IconButton>

            <Typography variant="caption" paragraph={true}>
              Opened Fields
            </Typography>
            <Typography variant="body1">{`${markedCells}/${
              xFieldsCount * yFieldsCount - bombsCount
            }`}</Typography>
          </Box>
          <Box>
            <IconButton
              color="primary"
              aria-label="flag-count"
              component="span"
            >
              <FlagIcon />
            </IconButton>
            <Typography variant="caption" paragraph={true}>
              Mines Marked
            </Typography>
            <Typography variant="body1">{`${flagsMarked}-${bombsCount}`}</Typography>
          </Box>
          <Box>
            <IconButton
              color="primary"
              aria-label="total-cells"
              component="span"
            >
              <SignalCellular0BarIcon />
            </IconButton>
            <Typography variant="caption" paragraph={true}>
              Grid Size
            </Typography>
            <Typography variant="body1">{`${xFieldsCount}x${yFieldsCount}`}</Typography>
          </Box>
        </Stack>
      </Card>
    </Container>
  );
};
