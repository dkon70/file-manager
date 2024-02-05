import { stdin, stdout } from 'process';
import greetings from './utils/greetings.js';
import getUsername from './utils/getUsername.js';
import readline from 'readline';
import farewell from './utils/farewell.js';
import os from 'os';
import getCommand from './utils/getCommand.js';
import commandHandler from './commandHandler.js';

async function main() {
  const username = await getUsername();
  const homeDir = os.homedir();
  process.chdir(homeDir);
  await greetings(username);
  console.log(`You are currently in ${homeDir}`);
  const rl = readline.createInterface(stdin, stdout);
  rl.on('line', function(line) {
    if (line.trim() === '.exit') {
      farewell(username);
    }
    commandHandler(getCommand(line));
    console.log(`You are currently in ${process.cwd()}`);
  });

  rl.on('SIGINT', function() {
    farewell(username);
  });

  process.on('uncaughtException', function() {
    console.error('Error: Unexpected error');
  });
}

await main();