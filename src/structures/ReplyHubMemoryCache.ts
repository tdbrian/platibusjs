import NodeCache = require('node-cache');
import { Message, SentMessage } from '../';

const MINIMUM_REPLY_TIMEOUT = 5000;

/**
 * Uses a memory cache to store sent messages and route related messages to their
 * 
 * @class ReplyHubMemoryCache
 * @export
 */
export class ReplyHubMemoryCache {
	private readonly cache: NodeCache;
	private readonly replyTimeoutInMilliseconds: number;

	/**
	 * Creates an instance of ReplyHubMemoryCache that will hold sent messages in memory until the specified replyTimeout has elapsed.
	 * 
	 * @param {number} replyTimeoutInMilliseconds Number of milliseconds to wait before timming out on reply. Defaults to 5 seconds.
	 * @memberOf ReplyHubMemoryCache
	 */
	constructor(replyTimeoutInMilliseconds: number) {
		this.replyTimeoutInMilliseconds = replyTimeoutInMilliseconds <= 0 ? MINIMUM_REPLY_TIMEOUT : replyTimeoutInMilliseconds; 
	}

	createSentMessage(message: Message): SentMessage {
		
	}
}