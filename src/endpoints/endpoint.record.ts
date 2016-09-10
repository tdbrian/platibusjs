import { recordify, TypedRecord } from 'typed-immutable-record';
import { ClientCredentialEnum } from '../'

/** Initializes a new Endpoint with the specified address and credentials. */
export interface IEndpoint {
	/** Endpoint machine address. */
	address: string;

	/** Authentication credentials to access the endpoint. */
	credentials: ClientCredentialEnum;
}

export interface IEndpointRecord extends TypedRecord<IEndpointRecord>, IEndpoint {}
export const endpointFactory = (endpoint: IEndpoint) => recordify<IEndpoint, IEndpointRecord>(endpoint);