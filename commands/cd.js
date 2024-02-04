import path from 'path';

async function cd(...destination) {
  const destinationStr = destination.join(' ');
  try {
    process.chdir(path.join(destinationStr.replace(/'|"/g, '')));
  } catch(err) {
    console.error('Error: No such directory\n');
  }
    
}

export default cd;