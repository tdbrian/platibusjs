/**
 * Token used to cancel promises and async operations
 * 
 * @export
 * @class CancellationToken
 */
export class CancellationToken {

	constructor(private cancelled = false) { }

	throwIfCancelled() {
		if (this.isCancelled()) {
			throw "Cancelled!";
		}
	}

	isCancelled() {
		return this.cancelled === true;
	}

	cancel() {
		this.cancelled = true;
	}
}