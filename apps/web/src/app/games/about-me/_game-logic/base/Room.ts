import type { CustomAction } from "../actions/CustomAction";
import type { Game } from "../Game";
import type { TextResult } from "../results/TextResult";
import type { Action, GameReturnType } from "./Action";

export abstract class Room {
	/** The name of the room */
	public readonly name: string;

	public readonly game: Game;

	public constructor(name: string, game: Game) {
		this.name = name;
		this.game = game;
	}

	public abstract image(action?: Action): string;
	public abstract examine(action?: Action): TextResult | undefined;
	public abstract actions(action?: Action): Action[] | undefined;
	public abstract objects(action?: Action): Action[] | undefined;
	public abstract custom(action?: CustomAction): GameReturnType;
}
