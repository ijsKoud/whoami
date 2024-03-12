import type { Dispatch, FC, PropsWithChildren, SetStateAction } from "react";
import { createContext, useContext, useMemo, useState } from "react";

import type { GameReturnType } from "../_game-logic/base/Action";
import { Game } from "../_game-logic/Game";

const GameControllerContext = createContext({
	game: new Game(),
	result: new Game().toJSON() as GameReturnType,
	setResult: (() => void 0) as Dispatch<SetStateAction<GameReturnType>>
});

export const UseGameController = () => {
	const ctx = useContext(GameControllerContext);
	if (!ctx) throw new Error("UseGameController must be used within GameControllerProvider");

	return ctx;
};

export const GameControllerProvider: FC<PropsWithChildren> = ({ children }) => {
	const game = useMemo(() => new Game(), []);
	const [result, setResult] = useState<GameReturnType>(game.toJSON());

	return <GameControllerContext.Provider value={{ game, result, setResult }}>{children}</GameControllerContext.Provider>;
};
