import { createBrotliCompress } from 'zlib';
import path from 'path';
import fs from 'fs';

async function compress(args) {
  const [arg1, arg2] = args;
  const pathToInputFile = path.resolve(arg1);
  const pathToOutputFile = path.resolve(!arg2 || arg2 === '' ? arg1 : arg2, path.basename(pathToInputFile) + '.br');
  const readStream = fs.createReadStream(pathToInputFile);
  const writeStream = fs.createWriteStream(pathToOutputFile);

  readStream.on('error', function(err) {
    if (err.message.startsWith('ENOENT')) {
      console.error("Error: No such file");
    } else {
      console.error("Error: Can't compress file");
    }
  });

  writeStream.on('error', function(err) {
    if (err.message.startsWith('ENOENT')) {
      console.error("Error: Can't compress file. Destination directory is incorrect.");
    } else if (err.message.startsWith('EPERM')) {
      console.error("Error: Can't compress file. Permission denied.");
    }
  });

  readStream.pipe(createBrotliCompress()).pipe(writeStream);
}

export default compress;