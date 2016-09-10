import { recordify, TypedRecord } from 'typed-immutable-record';

export interface ICancellationToken {
	cancelled: boolean;
}

export interface ICancellationTokenRecord extends TypedRecord<ICancellationTokenRecord>, ICancellationToken {}
export const cancellationTokenFactory = (cancellationToken: ICancellationToken) => recordify<ICancellationToken, ICancellationTokenRecord>(cancellationToken);