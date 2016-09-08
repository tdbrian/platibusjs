import { BusInterface, EndpointCollectionInterface, HandlingRuleInterface } from './';

export class Bus implements BusInterface {
	private readonly baseUri: string;
	private readonly defaultContentType: string;
	private readonly endpoints: EndpointCollectionInterface;
	private readonly handlingRules: HandlingRuleInterface[];
	private readonly replyHub: MemoryCacheReplyHub = new MemoryCacheReplyHub(TimeSpan.FromMinutes(5));
	private readonly messageJournalingService: IMessageJournalingService;
	private readonly messageNamingService: IMessageNamingService;
	private readonly messageQueueingService: IMessageQueueingService;
	private readonly sendRules: ISendRule[];
	private readonly serializationService: ISerializationService[];
	private readonly subscriptionTasks: Promise<string>[];
	private readonly subscriptions: ISubscription[];
	private readonly topics: TopicName[];
	private readonly transportService: ITransportService;

	constructor() {
			
	}
}