import _ from "lodash";

import { CustomAction } from "../actions/CustomAction";
import { ExamineAction } from "../actions/ExamineAction";
import type { Action, GameReturnType } from "../base/Action";
import { Room } from "../base/Room";
import type { Game } from "../Game";
import { TextResult } from "../results/TextResult";
import { EntertainmentRoom } from "./EntertainmentRoom";
import { MainRoom } from "./MainRoom";

export class GameLibraryRoom extends Room {
	private examineOptions: Record<string, string> = {
		cyberpunk: "'Cyberpunk 2077', bought in December 2023. Despite the rough release, it's a great game and I had a great time playing it."
	};

	public constructor(game: Game) {
		super("game-library", game);
	}

	public override image(action?: Action): string {
		return "https://cdna.artstation.com/p/assets/images/images/062/492/270/large/sofia-ritter-chatting-4k.jpg";
	}

	public override examine(action?: Action): TextResult {
		return new TextResult("This is my storage full of games.", { speaker: "character" });
	}

	public override actions(action?: Action): Action[] {
		return [new ExamineAction(), new CustomAction("explore", "Explore")];
	}

	public override objects(action?: Action): Action[] {
		if (action instanceof ExamineAction)
			return Object.keys(this.examineOptions).map((key) => new CustomAction(key, _.capitalize(key), action.id));

		if (action?.id === "explore")
			return [new CustomAction("desk", "Desk", "explore"), new CustomAction("entertainment", "Entertainment", "explore")];
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
				entertainment: new EntertainmentRoom(this.game)
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
