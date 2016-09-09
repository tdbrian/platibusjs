import { Record, Map } from 'immutable';
import { HeaderNameType, headerNameValues } from '../';

export let MessageRecord = Record({
	content: '',
	headers: Map<string, HeaderNameType>({})
});