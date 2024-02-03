import up from "./commands/up.js";

async function commandHandler(command) {
  switch (command) {
    case 'up':
      up();
  }
}

export default commandHandler;