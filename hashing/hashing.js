"use strict";

var crypto = require("crypto");
const util = require("util");
const { Performance } = require("perf_hooks");

// The Power of a Smile
// by Tupac Shakur
var poem = [
  "The power of a gun can kill",
  "and the power of fire can burn",
  "the power of wind can chill",
  "and the power of a mind can learn",
  "the power of anger can rage",
  "inside until it tears u apart",
  "but the power of a smile",
  "especially yours can heal a frozen heart",
];

var Blockchain = {
  blocks: [],
};

// Genesis block
Blockchain.blocks.push({
  index: 0,
  hash: "000000",
  data: "",
  timestamp: Date.now(),
});

// TODO: insert each line into blockchain
for (let line of poem) {
  createBlock(line);
}

// Create a function called createBlock()
// `index`
// `prevHash`
// `data`
// `timestamp`
// `hash`

function createBlock(_data) {
  const previousBlock = Blockchain.blocks[Blockchain.blocks.length - 1];
  const newBlock = {
    index: Blockchain.blocks.length,
    prevHash: previousBlock.hash,
    data: _data,
    timestamp: Date.now(),
  };
  console.log({
    newBlock,
    bBlock,
  });
}

// console.log(`Blockchain is valid: ${verifyChain(Blockchain)}`);

// **********************************

// function blockHash(bl) {

// 	// let block = JSON.stringify(bl)

// 	return crypto.createHash("sha256").update(
// 		// TODO: use block data to calculate hash
// 		`${bl.index};${bl.prevHash};${bl.data};${bl.timestamp};`

// 	).digest("hex");
// }

function hashBlock(bl) {
  const ourHash = crypto.createHash("md5").update(bl.data);
  {
    console.log({
      ourHash,
    });
  }
}
