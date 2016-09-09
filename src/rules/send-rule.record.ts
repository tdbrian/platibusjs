import { EndpointRecord } from '../';
import { Record, List, Map } from 'immutable';

/** Basic send rule implementation */
export let SendRuleRecord = Record({
	
	/** The message specification that selects messages to which the send rule applies. */
	//specification: MessageSpecificationRecord,

	/** The set of endpoints to which messages that match the Specification should be sent. */
	endpoints: List.of<EndpointRecord>()
});