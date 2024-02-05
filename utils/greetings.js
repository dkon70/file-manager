async function greetings(username) {
  if (username) {
    console.log(`Welcome to the File Manager, ${username}`);
  } else {
    console.log('Welcome to the File Manager');
  }
}

export default greetings;