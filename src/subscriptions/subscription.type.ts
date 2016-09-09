export type SubscriptionType = {

	/** Endpoint for the subscription */
	readonly endpoint: string;

	/** Topic of the subscription. */
	readonly topic: string; 
	
	/** Life of the subscription in milliseconds */
	readonly ttl: number;
}