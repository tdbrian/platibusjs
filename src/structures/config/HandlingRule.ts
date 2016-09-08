import { MessageSpecificationInterface, HandlingRuleInterface, QueueName } from '../';

export class HandlingRule implements HandlingRuleInterface {
	
	getSpecification(): MessageSpecificationInterface {
		// TODO: Implement
		return {} as MessageSpecificationInterface;
	}
	
	getQueueName(): QueueName {
		// TODO: Implement
		return {} as QueueName;
	}
}