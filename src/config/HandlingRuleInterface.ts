import { MessageSpecificationInterface } from '../';

export interface HandlingRuleInterface {
	getSpecification(): MessageSpecificationInterface;
	getQueueName(): QueueName;
}