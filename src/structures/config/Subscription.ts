class Subscription {
	
	/**
	 * An interface describing a subscription to a topic hosted on a local or remote bus instance.
	 * @memberOf Subscription
	 */
	constructor(private readonly endpoint: string, private readonly topic: string, private readonly ttl: number) { }

	toString(): string {
		return `${this.topic}@${this.endpoint}`;
	}
}