const key = require('./env-key.json');

const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const compiledFactory = require('./build/CampaignFactory.json');
const compiledHashStore = require('./build/HashStore.json');

const provider = new HDWalletProvider(
  key.MNEMONIC,
  key.RINKEBY_URL,
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  const deployFactory = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface))
    .deploy({ data: '0x' + compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] })
    .catch(err => {
      if (err) console.log('deploying factory error occured', err);
    });

  // const deployHashStore = await new web3.eth.Contract(
  //   JSON.parse(compiledHashStore.interface))
  //   .deploy({ data: compiledHashStore.bytecode })
  //   .send({ gas: '1000000', from: accounts[0] })
  //   .catch(err => {
  //     if (err) console.error('deploying hashstore error occured', err);
  //   });

  console.log('Factory Contract deployed to ', deployFactory.options.address);
  // console.log('HashStore Contract deployed to ', deployHashStore);
};

deploy();
