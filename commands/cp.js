import path from 'path';
import fs from 'fs';

async function cp(args) {
  const [arg1, arg2] = args;
  try {
    const pathToInputFile = path.resolve(arg1);
    const pathToOutputFile = path.resolve(arg2, path.basename(pathToInputFile));
    const readStream = fs.createReadStream(pathToInputFile);
    const writeStream = fs.createWriteStream(pathToOutputFile);
    readStream.pipe(writeStream);
  } catch (err) {
    console.error("Error: Can't copy file");
  }
}

export default cp;