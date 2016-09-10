import { recordify, TypedRecord } from 'typed-immutable-record';
import { IEndpointRecord } from '../';
import { List } from 'immutable';

/** Basic send rule implementation */
export interface ISendRule {

	/** The set of endpoints to which messages that match the Specification should be sent. */
	endpoints: List<IEndpointRecord>
}

export interface ISendRuleRecord extends TypedRecord<ISendRuleRecord>, ISendRule {}
export const sendRuleFactory = (sendRule: ISendRule) => recordify<ISendRule, ISendRuleRecord>(sendRule);
