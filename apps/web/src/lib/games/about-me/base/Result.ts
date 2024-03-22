export abstract class Result {
	/** The unique result id */
	public readonly id: string;

	public constructor(id: string) {
		this.id = id;
	}
}
