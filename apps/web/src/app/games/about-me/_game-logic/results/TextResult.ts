import { Result } from "../base/Result";

export class TextResult extends Result {
	public readonly text: string;

	/** The location this text result came from */
	public readonly speaker: TextResultOptions["speaker"];

	public constructor(text: string, options?: Partial<TextResultOptions>) {
		super(options?.id ?? "text");

		this.text = text;
		this.speaker = options?.speaker ?? "self";
	}

	public toJSON() {
		return {
			type: "text",
			speaker: this.speaker,
			text: this.text
		};
	}
}

export type TextResultOptions = {
	/** The location this text result came from */
	speaker: "character" | "narrator" | "self";

	/** Unique identifier for this result */
	id: string;
};
