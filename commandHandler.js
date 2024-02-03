import up from "./commands/up.js";
import ls from "./commands/ls.js";

async function commandHandler(command) {
  switch (command) {
    case 'up':
      await up();
      return;
    case 'ls':
      await ls();
      return;
  }
}

export default commandHandler;