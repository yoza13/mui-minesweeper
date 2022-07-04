import * as React from "react";
interface CellProps {
    value: string | number;
    xCoord: number;
    yCoord: number;
    lostGame: () => void;
    flagged: boolean;
    revealed: boolean;
    updateFlagsBoard: (value1: number, value2: number, value3: boolean) => void;
    iconClass: string;
    checkAdjacentCells: (value1: number, value2: number) => void;
}
export declare const Cell: React.FC<CellProps>;
export {};
