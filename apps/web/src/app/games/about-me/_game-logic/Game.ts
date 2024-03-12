import { CustomAction } from "./actions/CustomAction";
import { ExamineAction } from "./actions/ExamineAction";
import type { Action } from "./base/Action";
import type { Room } from "./base/Room";
import { MainRoom } from "./rooms/MainRoom";

export class Game {
	private _room: Room;

	public get room() {
		return this._room;
	}

	public constructor() {
		this._room = new MainRoom(this);
	}

	public setRoom(room: Room) {
		this._room = room;
		return this.toJSON();
	}

	public handleAction(id: string, object?: string) {
		const action = this.getAction(id, object);
		return this.handle(action);
	}

	public getAction(id: string, object?: string) {
		if (object && object.startsWith("custom:")) return CustomAction.handleAction(id, object);
		if (id.startsWith("custom:")) return new CustomAction(id.replace("custom:", ""), id.replace("custom:", ""));

		const actions: Action[] = [new ExamineAction()];
		return actions.find((action) => action.id === id);
	}

	public handle(action?: Action) {
		if (action) return action.handle(this);
		return this.toJSON();
	}

	public toJSON() {
		return {
			image: this.room.image(),
			actions: this.room.actions()?.map((action) => action.toJSON()),
			objects: this.room.objects()?.map((action) => action.toJSON()),
			examine: this.room.examine()?.toJSON()
		};
	}
}
