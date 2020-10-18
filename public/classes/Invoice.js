// invoice class
class Invoice {
    constructor(client, details, amount) {
        this._client = client;
        this._details = details;
        this._amount = amount;
    }
    get client() {
        return this._client;
    }
    set client(value) {
        this._client = value;
    }
    get details() {
        return this._details;
    }
    get amount() {
        return this._amount;
    }
    format() {
        return `${this._client} owes $${this._amount} for ${this._details}.`;
    }
}
export default Invoice;
