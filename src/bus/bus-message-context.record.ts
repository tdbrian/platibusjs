import { List } from 'immutable';
import { makeTypedFactory, recordify, TypedRecord } from 'typed-immutable-record';
import { IBusRecord, HeaderNameType } from '../';

export interface IBusMessageContext {
	bus: IBusRecord;
	headers: List<HeaderNameType>;
	senderPrincipal: undefined;
}

/** The information associated a message once sent on the Bus. */
export interface IBusMessageContextRecord extends TypedRecord<IBusMessageContextRecord>, IBusMessageContext {}
export const busMessageContextFactory = (busMessageContext: IBusMessageContext) => recordify<IBusMessageContext, IBusMessageContextRecord>(busMessageContext);