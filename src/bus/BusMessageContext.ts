import { List } from 'immutable';
import { makeTypedFactory, TypedRecord } from 'typed-immutable-record';
import { BusFactory, IBusRecord, HeaderNameType } from '../';

interface IBusMessageContext {
	bus: IBusRecord;
	headers: List<HeaderNameType>;
	senderPrincipal: undefined;
}

export let defaultBusMessageContext = {
	bus: BusFactory(),
	headers: List.of<HeaderNameType>(),
	senderPrincipal: undefined
};

/** The information associated a message once sent on the Bus. */
export interface IBusMessageContextRecord extends TypedRecord<IBusMessageContextRecord>, IBusMessageContext {} 
export const BusMessageContextFactory = makeTypedFactory<IBusMessageContext, IBusMessageContextRecord>(defaultBusMessageContext);