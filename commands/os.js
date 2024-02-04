import { EOL, arch, cpus, homedir, userInfo } from 'os';

async function os(flag) {
  console.log(flag)
  switch (flag) {
    case '--EOL':
      console.log(JSON.stringify(EOL));
      break;
    case '--cpus':
      console.log(cpus());
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
  }
}

export default os;