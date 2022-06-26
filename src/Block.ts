import { Transaction } from "./Transaction";
import { buildHash } from "./executeTxn";
class Block {
  previousHash: string;
  currentHash: string;
  timeStamp: number;

  constructor(previousHash: string, currentHash: string, timeStamp: number) {
    this.previousHash = previousHash;
    this.currentHash = currentHash;
    this.timeStamp = timeStamp;
  }
}

const time = () => new Date().getTime();
const genesisBlockValue = "--- GENESIS BLOCK TXN ---";
const genesisTransaction = new Transaction(
  "creator",
  null,
  genesisBlockValue,
  time().toString(),
  time().toString(),
  buildHash(genesisBlockValue)
);

const genTimeStamp = new Date().getTime();
const genesisBlock = new Block(
  "",
  buildHash(`${genesisTransaction.valueSent}${time().toString()}`),
  genTimeStamp
);

console.log(genesisTransaction);
