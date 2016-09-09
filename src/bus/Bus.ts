import { List } from 'immutable';
import { makeTypedFactory, TypedRecord } from 'typed-immutable-record';
import { SubscriptionType, EndpointRecord } from '../';

interface IBus {
	baseUri: string;
	defaultContentType: string;
	endpoints: List<any>;
	sendRules: List<any>;
	subscriptionTasks: List<Promise<string>>;
	subscriptions: List<SubscriptionType>;
	topics: List<string>;
}

const defaultBus = {
	baseUri: '',
	defaultContentType: '',
	endpoints: List.of(),
	sendRules: List.of(),
	subscriptionTasks: List.of<Promise<string>>(),
	subscriptions: List.of<SubscriptionType>(),
	topics: List.of<string>()
};

export interface IBusRecord extends TypedRecord<IBusRecord>, IBus {} 
export const BusFactory = makeTypedFactory<IBus, IBusRecord>(defaultBus);