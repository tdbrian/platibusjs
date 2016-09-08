import { ReplyHubMemoryCache, SendRule } from '../';

/** Number of milliseconds for default reply messages before timing out with error */
const REPLY_HUB_MEMORY_CACHE_TIMEOUT = 5000000;

export class Bus {
	private readonly baseUri: string;
	private readonly defaultContentType: string;
	private readonly endpoints: EndpointCollectionInterface;
	private readonly handlingRules: HandlingRuleInterface[];
	private readonly replyHub: ReplyHubMemoryCache = new ReplyHubMemoryCache(5000000);
	private readonly messageJournalingService: MessageJournalingServiceInterface;
	private readonly messageNamingService: IMessageNamingService;
	private readonly messageQueueingService: IMessageQueueingService;
	private readonly sendRules: SendRule[];
	private readonly serializationService: ISerializationService[];
	private readonly subscriptionTasks: Promise<string>[];
	private readonly subscriptions: Subscription[];
	private readonly topics: string[];
	private readonly transportService: ITransportService;

	constructor() {
	}
}