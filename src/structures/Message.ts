import { MessageHeaders } from '../';

export class Message {
	constructor(
		private readonly content: string, 
		private readonly headers: MessageHeaders
	) { }
}