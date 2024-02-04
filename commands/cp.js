import path from 'path';
import fs from 'fs';

async function cp(args) {
  const [arg1, arg2] = args;
  const pathToInputFile = path.resolve(arg1);
  const pathToOutputFile = path.resolve(arg2, path.basename(pathToInputFile));
  const readStream = fs.createReadStream(pathToInputFile);
  const writeStream = fs.createWriteStream(pathToOutputFile);

  readStream.on('error', function(err) {
    if (err.message.startsWith('ENOENT')) {
      console.error("Error: No such file");
    } else {
      console.error("Error: Can't move file");
    }
  });

  writeStream.on('error', function(err) {
    if (err.message.startsWith('ENOENT')) {
      console.error("Error: Can't move file. Destination directory is incorrect.");
    } else if (err.message.startsWith('EPERM')) {
      console.error("Error: Can't move file. Permission denied.");
    }
  });

  readStream.pipe(writeStream);
}

export default cp;