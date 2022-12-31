import { pushTxtoMemPool } from "./mempool";
import { mainExec } from "./executeTxn";

interface data {
  addModule: string;
  from: string;
  values: object;
}

interface values {
  data: data;
  time: string;
}

const sendTransactionParams = (val: values, sentTime: string) => {
  let incomingTx: object = val;
  val.time = sentTime;
  pushTxtoMemPool(incomingTx);
  myFunc();
};

let myFunc = () => {
  myFunc = function () {}; // kill it as soon as it was called
  mainExec();
};

export { sendTransactionParams };
