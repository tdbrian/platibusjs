import { EndpointInterface, EndpointCollectionInterface } from './';

export class EndpointCollection implements EndpointCollectionInterface {
	private readonly endpoints: { [email: string]: EndpointInterface; };
	
	GetEndpoint(endpointName: string): EndpointInterface {
		// TODO: Implement
		return <EndpointInterface>{};
	};
	
	TryGetEndpointByAddress(address: string, endpoint: EndpointInterface): boolean {
		// TODO: Implement
		return false;
	};
}