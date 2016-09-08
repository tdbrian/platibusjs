import { Bus, MessageHeaders, Principal } from '../';

/**
 * The information associated a message once sent on the Bus
 * @class BusMessageContext
 */
export class BusMessageContext {

	constructor(
		private readonly bus: Bus,
		private readonly headers: MessageHeaders,
		private readonly senderPrincipal: Principal
	) {	}
}