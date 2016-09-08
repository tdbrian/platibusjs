import { EndpointInterface, EndpointCredentialsInterface } from './';

export class Endpoint implements EndpointInterface {
	private readonly credentials: EndpointCredentialsInterface;

	getAddress(): string {
		// TODO: Implement
		return '';
	}
}