export type MessageImportanceValue = -1 | 0 | 1 | 2;

export class MessageImportance {
	static lowValue = -1;
    static normalValue = 0;
    static highValue = 1;
    static criticalValue = 2;

    constructor(readonly value: MessageImportanceValue) {}
}