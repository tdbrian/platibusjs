/**
 * Initializes a new <see cref="Endpoint"/> with the specified address and credentials
 * @export
 * @class Endpoint
 */
export class Endpoint {
	constructor(
		readonly address = '',
		readonly credentials?: string
	) { }

	toString(): string {
		return this.address;
	}
}