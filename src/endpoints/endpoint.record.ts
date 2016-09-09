import { recordify, TypedRecord } from 'typed-immutable-record';
import { ClientCredentialEnum } from '../'

/** Initializes a new Endpoint with the specified address and credentials. */
interface IEndpoint {
	/** Endpoint machine address. */
	address: string;

	/** Authentication credentials to access the endpoint. */
	credentials: ClientCredentialEnum;
}

interface IEndpointRecord extends TypedRecord<IEndpointRecord>, IEndpoint {}

export function EndpointFactory(endpoint: IEndpoint) {
	return recordify<IEndpoint, IEndpointRecord>(endpoint);
}