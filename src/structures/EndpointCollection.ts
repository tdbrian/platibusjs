import { EndpointInterface } from '../';

export class EndpointCollection {
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