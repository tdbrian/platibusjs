import { Message } from '../';

export interface MessageSpecificationInterface {
	isSatisfiedBy(message: Message): boolean;
}