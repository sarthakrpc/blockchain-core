import { memPoolArray } from "./mempool";
import { Transaction } from "./Transaction";
import crypto from "crypto";

const buildHash = (value: string) => {
  const hashedValue: string = crypto
    .createHash("sha256")
    .update(value)
    .digest("hex");
  return hashedValue;
};

const buildBlock = (hashedVal: string) => {};

const mainExec = () => {
  setInterval(() => {
    let allValBlockConcat = "";
    while (memPoolArray.length > 0) {
      const element = memPoolArray[0];
      let valueConcat: string = "";
      for (const key in element.data.values) {
        // const newTx = new Transaction();
        // newTx.from = element.data.from;
        // newTx.addModule = element.data.addModule;
        // newTx.sentTime = element.time;
        valueConcat =
          valueConcat +
          element.data.values[key] +
          element.data.from +
          element.data.addModule +
          new Date().getTime().toString();
        // const hashedVal: string = buildHash(element.data.values[key]);
        // console.log(hashedVal);
      }
      allValBlockConcat += valueConcat;
      memPoolArray.shift();
      if (memPoolArray.length === 0) {
        const hashedVal: string = buildHash(allValBlockConcat);
        // console.log(allValBlockConcat);
        // console.log(hashedVal);
        buildBlock(hashedVal);
      }
    }
  }, 1000);
};

export { mainExec, buildHash };
