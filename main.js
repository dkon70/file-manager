import { stdin, stdout } from 'process';
import greetings from './greetings.js';
import getUsername from './utils/getUsername.js';
import readline from 'readline';
import farewell from './farewell.js';
import os from 'os';

async function main() {
  const username = await getUsername();
  const homeDir = os.homedir();
  await greetings(username);
  console.log(`You are currently in ${homeDir}`);
  const rl = readline.createInterface(stdin, stdout);

  rl.on('line', function(line) {
    if (line.trim() === '.exit') {
      farewell(username);
    }
  });

  rl.on('SIGINT', function() {
    farewell(username);
  });
}

await main();