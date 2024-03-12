import _ from "lodash";

import { CustomAction } from "../actions/CustomAction";
import { ExamineAction } from "../actions/ExamineAction";
import type { Action, GameReturnType } from "../base/Action";
import { Room } from "../base/Room";
import type { Game } from "../Game";
import { TextResult } from "../results/TextResult";
import { GameLibraryRoom } from "./GameLibraryRoom";
import { MainRoom } from "./MainRoom";

export class EntertainmentRoom extends Room {
	private examineOptions: Record<string, string> = {
		TV: "I have a basic 'TCL 43 inch' TV with an 'Apple TV 4K', does what it needs to do.",
		console: "I have a 'Playstation 5' and a 'Nintendo Switch'.",
		speaker: "I use the 'JBL Xtreme 2' speaker, it's great for the price."
	};

	public constructor(game: Game) {
		super("entertainment", game);
	}

	public override image(action?: Action): string {
		return "https://thumb.ac-illust.com/53/53e75a63f2f3e42f7bff4c867e35c788_t.jpeg";
	}

	public override examine(action?: Action): TextResult {
		return new TextResult("This is where I rest, game or watch movies/series.", { speaker: "character" });
	}

	public override actions(action?: Action): Action[] {
		return [new ExamineAction(), new CustomAction("explore", "Explore")];
	}

	public override objects(action?: Action): Action[] {
		if (action instanceof ExamineAction)
			return Object.keys(this.examineOptions).map((key) => new CustomAction(key, _.capitalize(key), action.id));

		if (action?.id === "explore")
			return [new CustomAction("desk", "Desk", "explore"), new CustomAction("game-library", "Game library", "explore")];
		return [];
	}

	public override custom(action: CustomAction): GameReturnType {
		if (action.id === "explore")
			return {
				...this.game.toJSON(),
				examine: new TextResult("What would you like to explore?", { speaker: "narrator" }).toJSON(),
				objects: this.objects(action).map((action) => action.toJSON())
			};

		if (action.parent === "explore") {
			const rooms: Record<string, Room> = {
				desk: new MainRoom(this.game),
				"game-library": new GameLibraryRoom(this.game)
			};

			return this.game.setRoom(rooms[action.id]!);
		}

		const response = Object.keys(this.examineOptions).includes(action.id)
			? new TextResult(this.examineOptions[action.id]!, { speaker: "character" })
			: this.examine();

		return {
			...this.game.toJSON(),
			examine: response.toJSON()
		};
	}
}
