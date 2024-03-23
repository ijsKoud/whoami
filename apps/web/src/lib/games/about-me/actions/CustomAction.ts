import type { GameReturnType } from "../base/Action";
import { Action } from "../base/Action";
import type { Game } from "../Game";

export class CustomAction extends Action {
	/** The parent action id */
	public readonly parent?: string;

	public constructor(id: string, label: string, parent?: string) {
		super(id, label);
		this.parent = parent;
	}

	public override handle(game: Game): GameReturnType {
		if ("custom" in game.room) {
			return game.room.custom(this);
		}

		return game.toJSON();
	}

	public override toJSON() {
		return {
			id: this.parent ?? `custom:${this.id}`,
			object: `custom:${this.id}`,
			label: this.name
		};
	}

	public static handleAction(id: string, object: string) {
		const action = new CustomAction(object.replace("custom:", ""), object, id);
		return action;
	}
}
