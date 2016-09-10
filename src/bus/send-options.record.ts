import { List } from 'immutable';
import { recordify, TypedRecord } from 'typed-immutable-record';
import { MessageImportanceType, importanceValues } from '../';

/** Parameters that influence how a message is sent. */
export interface ISendOptions {
	
	/**	
	 * The MIME type of the message content. This influences how the message will be serialized.  For example,
	 * if the content type is "application/json", then the body will be a serialized JSON string; if the content 
	 * type is "application/xml" then the content will be an XML string; and if the content type is "application/octet-stream" 
	 * then the content will be a base-64 encoded byte stream.  Which content types are supported and how they are serialized 
	 * depends on the ISerializationService used.
	 * 
	 * @link ISerializationService
	 */
	contentType: string;

	/**
	 * The importance of the message.
	 * 
	 * @description Message importance influences whether messages are queued by the sender, queued by the receiver, or both.  
	 * For instance, MessageImportance.Critical messages will be queued on both sides and every attempt will 
	 * be made to deliver and handle them at least once.
	 * 
	 * @type {MessageImportanceValue}
	 * @memberOf SendOptions
	 * @link MessageImportance
	 */
	importance: MessageImportanceType;

	/**
	 * The maximum Time To Live (TTL) for the message.  When the TTL expires all attempts to deliver or handle the message 
	 * will stop.
	 * 
	 * @type {number}
	 * @memberOf SendOptions
	 */
	ttl: number;
};

export interface ISendOptionsRecord extends TypedRecord<ISendOptionsRecord>, ISendOptions {} 
export const sendOptionsFactory = (sendOptions: ISendOptions) => recordify<ISendOptions, ISendOptionsRecord>(sendOptions);