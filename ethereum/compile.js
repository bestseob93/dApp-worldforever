const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build');

fs.removeSync(buildPath); // Delete entire build folder

const campaignPath = path.resolve(__dirname, 'contracts', 'CampaignHashStore.sol');
const source = fs.readFileSync(campaignPath, 'utf8'); // Read 'CampaignHashStore.sol' from the 'contracts' folder

const output = solc.compile(source, 1).contracts;
console.log(output);

fs.ensureDirSync(buildPath); // check the dir exists, if doesn't exist, create dir.

for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json' ),
    output[contract]
  );
}