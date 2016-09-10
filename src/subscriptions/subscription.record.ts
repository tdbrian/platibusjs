import { recordify, TypedRecord } from 'typed-immutable-record';

export interface ISubscription {

	/** Endpoint for the subscription */
	readonly endpoint: string;

	/** Topic of the subscription. */
	readonly topic: string; 
	
	/** Life of the subscription in milliseconds */
	readonly ttl: number;
}

export interface ISubscriptionRecord extends TypedRecord<ISubscriptionRecord>, ISubscription {}
export const subscriptionFactory = (subscription: ISubscription) => recordify<ISubscription, ISubscriptionRecord>(subscription);