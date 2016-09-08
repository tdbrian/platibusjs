import { MessageHeadersInterface, MessageImportanceValue } from '../';

export class MessageHeaders {
	readonly name: string;
	readonly id: string;
	readonly expiresOn: Date;
	readonly origination: string;
	readonly replyToEndpoint: string;
	readonly replyToMessageId: string;
	readonly publishedOn: Date;
	readonly topic: string;
	readonly sentOn: Date;
	readonly recievedOn: Date;
	readonly contentType: string;
	readonly importance: MessageImportanceValue;

	constructor() {}

	getUtcDate(): Date {
		// TODO: Implement
		return new Date();
	}
}