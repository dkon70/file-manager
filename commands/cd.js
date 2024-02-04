import path from 'path';
import quotesHandler from '../utils/quotesHandler.js';

async function cd(...destination) {
  const destinationStr = quotesHandler(...destination);
  try {
    process.chdir(path.resolve(destinationStr));
  } catch(err) {
    console.error('Error: No such directory\n');
  }
    
}

export default cd;