import rm from "./rm.js";
import path from 'path';
import fs from 'fs';

async function mv(args) {
  const [arg1, arg2] = args;
  try {
    const pathToInputFile = path.resolve(arg1);
    const pathToOutputFile = path.resolve(arg2, path.basename(pathToInputFile));
    const readStream = fs.createReadStream(pathToInputFile);
    const writeStream = fs.createWriteStream(pathToOutputFile);
    readStream.pipe(writeStream);
    await rm(pathToInputFile);
  } catch (err) {
    console.error("Error: Can't move file");
  }
}

export default mv;