import up from "./commands/up.js";
import ls from "./commands/ls.js";
import cd from "./commands/cd.js";

async function commandHandler(command) {
  const [cmd, ...args] = command;
  switch (cmd) {
    case 'up':
      await up();
      return;
    case 'ls':
      await ls();
      return;
    case 'cd':
      await cd(...args);
      return;
  }
}

export default commandHandler;