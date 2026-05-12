
export class Message {
    public UserId?: number | string;
    public TextMessage: string;
    public ConnectionId?: string;
    public UserName?: string;

    constructor(values: Object = {}) {
        if (values) {
            Object.assign(this, values);
        }
    }
}
