import { createContext } from "react";

interface GameContext {
  toggle: () => void;
  resetTimer: () => void;
  seconds: number;
  gameState: string;
  setGameState: (value: string) => void;
  flagsMarked: number;
  setFlagsMarked: (value: number) => void;
  newGame: boolean;
  setNewGame: (value: boolean) => void;
  resetGame: () => void;
  cellStates: boolean[][];
  setCellStates: (value: boolean[][]) => void;
  skillLevel: string;
  setSkillLevel: (value: string) => void;
  isActive: boolean;
  pauseButtonClicked: boolean;
  setPauseButtonClicked: (value: boolean) => void;
}

const GameContext = createContext<GameContext>({} as GameContext);

export const GameContextProvider = GameContext.Provider;

export default GameContext;
