import { Endpoint } from '../';
import * as _ from 'lodash';

export class EndpointCollection {
	private readonly endpoints: { [name: string]: Endpoint; };
	
	TryGetEndpointByName(endpointName: string): Endpoint | false {
		return _.includes(_.keys(this.endpoints), endpointName) ? this.endpoints[endpointName] : false;
	}
	
	TryGetEndpointByAddress(address: string): Endpoint | false {
		let endpoint = _.find(this.endpoints, (x: Endpoint) => x.address === address);
		return endpoint ? endpoint : false;
	}
}