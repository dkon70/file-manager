import getArgs from './utils/getArgs.js';
import up from "./commands/up.js";
import ls from "./commands/ls.js";
import cd from "./commands/cd.js";
import cat from "./commands/cat.js";
import add from "./commands/add.js";
import rm from "./commands/rm.js";
import rn from "./commands/rn.js";
import cp from './commands/cp.js';
import mv from './commands/mv.js';
import os from './commands/os.js';

async function commandHandler(command) {
  const [cmd, ...args] = command;
  switch (cmd) {
    case 'up':
      await up();
      break;
    case 'ls':
      await ls();
      break;
    case 'cd':
      await cd(...args);
      break;
    case 'cat':
      await cat(...args);
      break;
    case 'add':
      await add(...args);
      break;
    case 'rm':
      await rm(...args);
      break;
    case 'rn':
      await rn(await getArgs(...args));
      break;
    case 'cp':
      await cp(await getArgs(...args));
      break;
    case 'mv':
      await mv(await getArgs(...args));
      break;
    case 'os':
      await os(...args);
      break;
  }
}

export default commandHandler;