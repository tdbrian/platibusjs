import { recordify, TypedRecord } from 'typed-immutable-record';
import { Map } from 'immutable';
import { HeaderNameType, headerNameValues } from '../';

export interface IMessage {
	content: string;
	headers: Map<string, HeaderNameType>;
};

interface IMessageRecord extends TypedRecord<IMessageRecord>, IMessage {}
export const messageFactory = (message: IMessage) => recordify<IMessage, IMessageRecord>(message);