import path from 'path';

async function cd(destination) {
  try {
    process.chdir(path.join(destination));
  } catch(err) {
    console.log('Error: No such directory\n');
  }
    
}

export default cd;