import fs from 'fs';
import path from 'path';
import quotesHandler from '../utils/quotesHandler.js';

async function rm(...file) {
  const fileName = quotesHandler(...file);
  const pathToFile = path.resolve(fileName);
  fs.rm(pathToFile, function(err) {
    if (err) {
      console.error("Error: Can't remove file.");
    }
  });
}

export default rm;