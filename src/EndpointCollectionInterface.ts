import { EndpointInterface } from './';

export interface EndpointCollectionInterface {
	GetEndpoint(endpointName: string): EndpointInterface; 
	TryGetEndpointByAddress(address: string, endpoint: EndpointInterface): boolean;
}