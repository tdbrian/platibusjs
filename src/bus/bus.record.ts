import { List } from 'immutable';
import { recordify, TypedRecord } from 'typed-immutable-record';
import { SubscriptionType, IEndpointRecord, ISendRuleRecord } from '../';

interface IBus {
	baseUri: string;
	defaultContentType: string;
	endpoints: List<IEndpointRecord>;
	sendRules: List<ISendRuleRecord>;
	subscriptionTasks: List<Promise<string>>;
	subscriptions: List<SubscriptionType>;
	topics: List<string>;
}

export interface IBusRecord extends TypedRecord<IBusRecord>, IBus {} 
export const busFactory = (bus: IBus) => recordify<IBus, IBusRecord>(bus);