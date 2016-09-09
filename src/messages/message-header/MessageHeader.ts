import { TypedRecord, recordify } from 'typed-immutable-record';
import { MessageImportanceType, importanceValues } from '../';

/** Initializes a new Endpoint with the specified address and credentials. */
export interface IMessageHeader {
	contentType: string,
	expiresOn: Date,
	id: string,
	importance: MessageImportanceType,
	name: string,
	origination: string,
	publishedOn: Date,
	recievedOn: Date,
	replyToEndpoint: string,
	replyToMessageId: string,
	sentOn: Date,
	topic: string
}

interface IMessageHeaderRecord extends TypedRecord<IMessageHeaderRecord>, IMessageHeader {}

export function MessageHeaderFactory(messageHeader: IMessageHeader) {
	return recordify<IMessageHeader, IMessageHeaderRecord>(messageHeader);
}