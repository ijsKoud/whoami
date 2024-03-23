import { CustomAction } from "./actions/CustomAction";
import { ExamineAction } from "./actions/ExamineAction";
import type { Action } from "./base/Action";
import type { Room } from "./base/Room";
import { MainRoom } from "./rooms/MainRoom";

export class Game {
	private _room: Room;

	/**	The room the user is currently in */
	public get room() {
		return this._room;
	}

	public constructor() {
		this._room = new MainRoom(this);
	}

	/**
	 * Sets the room the user is currently in
	 * @param room The new room to set
	 * @returns The base room interactions
	 */
	public setRoom(room: Room) {
		this._room = room;
		return this.toJSON();
	}

	/**
	 * Handles the action the user is trying to perform
	 * @param id The action id
	 * @param object The action object (option)
	 * @returns The action result
	 */
	public handleAction(id: string, object?: string) {
		const action = this.getAction(id, object);
		return this.handle(action);
	}

	/**
	 * @returns The base room interactions
	 */
	public toJSON() {
		return {
			image: this.room.image(),
			actions: this.room.actions()?.map((action) => action.toJSON()),
			objects: this.room.objects()?.map((action) => action.toJSON()),
			examine: this.room.examine()?.toJSON()
		};
	}

	/**
	 * Gets the correct action class based on the id and object
	 * @param id The action id
	 * @param object The action object (option)
	 * @returns The correct Action if one
	 */
	private getAction(id: string, object?: string) {
		if (object && object.startsWith("custom:")) return CustomAction.handleAction(id, object);
		if (id.startsWith("custom:")) return new CustomAction(id.replace("custom:", ""), id.replace("custom:", ""));

		const actions: Action[] = [new ExamineAction()];
		return actions.find((action) => action.id === id);
	}

	/**
	 * Handles the action
	 * @param action The action to handle
	 * @returns The action result
	 */
	private handle(action?: Action) {
		if (action) return action.handle(this);
		return this.toJSON();
	}
}
