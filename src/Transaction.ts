export class Transaction {
  public from: string;
  public addModule: string | null;
  public valueSent: string;
  public sentTime: string;
  public finalizedTime: string;
  public finalizedHash: string;

  constructor(
    from: string,
    addModule: string | null,
    valueSent: string,
    sentTime: string,
    finalizedTime: string,
    finalizedHash: string
  ) {
    this.from = from;
    this.addModule = addModule;
    this.valueSent = valueSent;
    this.sentTime = sentTime;
    this.finalizedTime = finalizedTime;
    this.finalizedHash = finalizedHash;
  }
}
