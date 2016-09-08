import { MessageImportanceValue } from './';

export interface MessageHeadersInterface {
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
	getUtcDate(): Date;
}