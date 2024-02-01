import process from 'process';

async function greetings() {
  const args = process.argv;
  let usernameArg;
  args.forEach((arg, index) => {
    if (arg.startsWith('--username')) {
      usernameArg = args[index];
    }
  })
  
  const username = usernameArg ? usernameArg.split('=').slice(-1).join() : null;
  
  if (username) {
    console.log(`Welcome to the File Manager, ${username}`);
  } else {
    console.log('Welcome to the File Manager');
  }
}

export default greetings;