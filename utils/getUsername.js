async function getUsername() {
  const args = process.argv;
  let usernameArg;
  args.forEach((arg, index) => {
    if (arg.startsWith('--username')) {
      usernameArg = args[index];
    }
  });

  return usernameArg ? usernameArg.split('=').slice(-1).join() : null;
}

export default getUsername;