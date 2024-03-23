import type { CustomAction } from "../actions/CustomAction";
import type { Game } from "../Game";
import type { TextResult } from "../results/TextResult";
import type { Action, GameReturnType } from "./Action";

export abstract class Room {
	/** The name of the room */
	public readonly name: string;

	/** The game instance */
	public readonly game: Game;

	public constructor(name: string, game: Game) {
		this.name = name;
		this.game = game;
	}

	/**
	 * The image of the current room
	 * @param action The action the user is trying to perform
	 */
	public abstract image(action?: Action): string;

	/**
	 * The action the user is trying to perform
	 * @param action The action the user is trying to perform
	 */
	public abstract examine(action?: Action): TextResult | undefined;

	/**
	 * The actions the player is able to use
	 * @param action The action the user is trying to perform
	 */
	public abstract actions(action?: Action): Action[] | undefined;

	/**
	 * The action objects (options) the player is able to use
	 * @param action The action the user is trying to perform
	 */
	public abstract objects(action?: Action): Action[] | undefined;

	/**
	 * Handles the custom action the user is trying to perform
	 * @param action The action the user is trying to perform
	 */
	public abstract custom(action?: CustomAction): GameReturnType;
}
