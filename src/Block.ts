const cryptoAlg: any = require('crypto');

class Block{
	previousHash : string;
	currentHash : string;
	timeStamp : number;
}

const firstBlock = new Block();

firstBlock.previousHash = "null";
firstBlock.currentHash = "tertre";
firstBlock.timeStamp = 23;

// console.log(newBlock);
