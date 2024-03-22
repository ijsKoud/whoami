import type { Game } from "../Game";

export abstract class Action {
	/** The unique action id */
	public readonly id: string;

	/** The action name visible to the player */
	public readonly name: string;

	public constructor(id: string, name: string) {
		this.id = id;
		this.name = name;
	}

	public toJSON() {
		return {
			id: this.id,
			label: this.name
		};
	}

	/**
	 * Called when the user is trying to perform this action
	 * @param game The game instance
	 */
	public abstract handle(game: Game): GameReturnType;
}

export type GameReturnType = ReturnType<Game["toJSON"]>;
