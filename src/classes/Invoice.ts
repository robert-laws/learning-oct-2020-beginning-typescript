import { HasFormatter } from '../interfaces/HasFormatter.js';

// invoice class
class Invoice implements HasFormatter {
  private _client: string;
  private _details: string;
  private _amount: number;

  constructor(client: string, details: string, amount: number) {
    this._client = client;
    this._details = details;
    this._amount = amount;
  }

  get client() {
    return this._client;
  }

  set client(value: string) {
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
