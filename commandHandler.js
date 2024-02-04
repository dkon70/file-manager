import up from "./commands/up.js";
import ls from "./commands/ls.js";
import cd from "./commands/cd.js";
import cat from "./commands/cat.js";

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
  }
}

export default commandHandler;