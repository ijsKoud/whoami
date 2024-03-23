import _ from "lodash";

import { CustomAction } from "../actions/CustomAction";
import { ExamineAction } from "../actions/ExamineAction";
import type { Action, GameReturnType } from "../base/Action";
import { Room } from "../base/Room";
import type { Game } from "../Game";
import { TextResult } from "../results/TextResult";
import { EntertainmentRoom } from "./EntertainmentRoom";
import { GameLibraryRoom } from "./GameLibraryRoom";

export class MainRoom extends Room {
	private examineOptions: Record<string, string> = {
		laptop: "I currently use the 'ASUS Vivobook Pro 15' as my main machine.",
		mouse: "I use a basic 'Logitech wireless' mouse, nothing special about it.",
		headphones: "I use the 'Sony WH-XB910N' headphones at home, they are great for noise cancellation and extremely affordable.",
		airpods: "For outdoor use, I use the 'Airpods Pro'. They are comfy and easy to carry around.",
		phone: "I use the 'iPhone 14 Pro' as my main phone. It's a great phone, it only does not work well with my laptop."
	};

	public constructor(game: Game) {
		super("main", game);
	}

	public override image(action?: Action): string {
		return "https://cdnb.artstation.com/p/assets/images/images/036/125/405/original/igor-freitas-mesa.gif";
	}

	public override examine(action?: Action): TextResult {
		return new TextResult("This is my desk, here is where the magic happens.", { speaker: "character" });
	}

	public override actions(action?: Action): Action[] {
		return [new ExamineAction(), new CustomAction("explore", "Explore")];
	}

	public override objects(action?: Action): Action[] {
		if (action instanceof ExamineAction)
			return Object.keys(this.examineOptions).map((key) => new CustomAction(key, _.capitalize(key), action.id));

		if (action?.id === "explore")
			return [new CustomAction("game-library", "Game library", "explore"), new CustomAction("entertainment", "Entertainment", "explore")];
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
				"game-library": new GameLibraryRoom(this.game),
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
