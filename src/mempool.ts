let memPoolArray: any = [];
const pushTxtoMemPool = (incomingTransaction: any) => {
  memPoolArray.push(incomingTransaction);
};

export { pushTxtoMemPool, memPoolArray };
