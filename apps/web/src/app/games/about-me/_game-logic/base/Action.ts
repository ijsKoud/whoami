import type { Game } from "../Game";

export abstract class Action {
	public readonly id: string;

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

	public abstract handle(game: Game): GameReturnType;
}

export type GameReturnType = ReturnType<Game["toJSON"]>;
