import { MessageHeadersInterface } from './';

export class Message {
	private readonly content: string;
	private readonly headers: MessageHeadersInterface;

	constructor(content: string, headers: MessageHeadersInterface) {
		this.content = content;
		this.headers = headers;
	}
}