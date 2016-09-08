import { MessageHeadersInterface, MessageImportanceValue } from './';

export class MessageHeaders implements MessageHeadersInterface {
	name: string;
	id: string;
	expiresOn: Date;
	origination: string;
	replyToEndpoint: string;
	replyToMessageId: string;
	publishedOn: Date;
	topic: string;
	sentOn: Date;
	recievedOn: Date;
	contentType: string;
	importance: MessageImportanceValue;

	constructor() {}

	getUtcDate(): Date {
		// TODO: Implement
		return new Date();
	}
}