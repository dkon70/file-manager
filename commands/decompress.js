import { createBrotliDecompress } from 'zlib';
import path from 'path';
import fs from 'fs';

async function decompress(args) {
  const [arg1, arg2] = args;
  const pathToInputFile = path.resolve(arg1);
  const pathToOutputFile = path.resolve(arg2);
  const readStream = fs.createReadStream(pathToInputFile);
  const writeStream = fs.createWriteStream(pathToOutputFile);

  readStream.on('error', function(err) {
    if (err.message.startsWith('ENOENT')) {
      console.error("Error: No such file");
    } else {
      console.error("Error: Can't decompress file");
    }
  });

  writeStream.on('error', function(err) {
    if (err.message.startsWith('ENOENT')) {
      console.error("Error: Can't decompress file. Destination directory is incorrect.");
    } else if (err.message.startsWith('EPERM')) {
      console.error("Error: Can't decompress file. Permission denied.");
    }
  });

  readStream.pipe(createBrotliDecompress()).pipe(writeStream);
}

export default decompress;