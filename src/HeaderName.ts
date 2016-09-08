export type HeaderNameType = 
	"Platibus-MessageId" | 
	"Platibus-MessageName" | 
	"Platibus-Expires" | 
	"Platibus-Destination" | 
	"Platibus-Origination" | 
	"Platibus-ReplyTo" | 
	"Platibus-RelatedTo" | 
	"Platibus-Published" | 
	"Platibus-Topic" | 
	"Platibus-Sent" | 
	"Platibus-Received" | 
	"Content-Type" |
	"Platibus-Importance";

export class HeaderName {
    static MessageId = "Platibus-MessageId";
	static MessageName = "Platibus-MessageName";
	static Expires = "Platibus-Expires";
	static Destination = "Platibus-Destination";
	static Origination = "Platibus-Origination";
	static ReplyTo = "Platibus-ReplyTo";
	static RelatedTo = "Platibus-RelatedTo";
	static Published = "Platibus-Published";
	static Topic = "Platibus-Topic";
	static Sent = "Platibus-Sent";
	static Received = "Platibus-Received";
	static ContentType = "Content-Type";
	static Importance = "Platibus-Importance";

	constructor(readonly value: HeaderNameType) { }
}