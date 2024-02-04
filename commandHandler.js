import up from "./commands/up.js";
import ls from "./commands/ls.js";
import cd from "./commands/cd.js";
import cat from "./commands/cat.js";
import add from "./commands/add.js";
import rm from "./commands/rm.js";
import rn from "./commands/rn.js";
import getArgs from './utils/getArgs.js';

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
  }
}

export default commandHandler;