import { MessageSpecification } from './MessageSpecification';

/**
 * Basic send rule implementation
 * @class SendRule
 */
export class SendRule {
	constructor(private readonly specification: MessageSpecification, private readonly endpoints: string[]) { }
}