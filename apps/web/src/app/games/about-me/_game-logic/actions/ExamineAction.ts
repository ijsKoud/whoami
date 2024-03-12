import type { GameReturnType } from "../base/Action";
import { Action } from "../base/Action";
import type { Game } from "../Game";
import { TextResult } from "../results/TextResult";

export class ExamineAction extends Action {
	public constructor() {
		super("examine", "Examine");
	}

	public override handle(game: Game): GameReturnType {
		return {
			...game.toJSON(),
			examine: new TextResult("What would you like to examine?", { speaker: "narrator" }).toJSON(),
			objects: game.room.objects(this)?.map((action) => action.toJSON())
		};
	}
}
