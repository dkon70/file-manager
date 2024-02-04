import { EOL, arch, cpus, homedir, userInfo } from 'os';

async function os(flag) {
  console.log(flag)
  switch (flag) {
    case '--EOL':
      console.log(JSON.stringify(EOL));
      break;
    case '--cpus':
      const res = [];
      cpus().forEach((el) => {
        res.push({ model: el.model, speed: el.speed });
      });
      console.log(res);
      break;
    case '--homedir':
      console.log(homedir());
      break;
    case '--username':
      console.log(userInfo().username);
      break;
    case '--architecture':
      console.log(arch());
      break;
    default:
      console.error('Error: Invalid input.');
      break;
  }
}

export default os;