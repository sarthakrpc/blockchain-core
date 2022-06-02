import { pushTxtoMemPool, memPoolArray } from "./mempool";
import { Transaction } from "./Transaction";
import crypto from "crypto";

const buildHash = (value: string) => {
  const hashedValue: string = crypto
    .createHash("sha256")
    .update(value)
    .digest("hex");
  return hashedValue;
};

const sendTransactionParams = (val: object, sentTime: string) => {
  let incomingTx: object = val;
  pushTxtoMemPool(incomingTx);

  memPoolArray.forEach((element: any) => {
    // console.log(element.data);
    for (const key in element.data.values) {
      const newTx = new Transaction();
      newTx.from = element.data.from;
      newTx.addModule = element.data.addModule;
      //   console.log(key);
      //   console.log(element.data.values[key]);
      newTx.sentTime = sentTime;
      const hashedVal: string = buildHash(element.data.values[key]);
	//   console.log(hashedVal);
    }
  });
};

export { sendTransactionParams };
