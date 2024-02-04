import fs from 'fs';
import path from 'path';

async function rn(args) {
  const [arg1, arg2] = args;
  const pathToInputFile = path.join(arg1);
  const pathToOutputFile = path.join(arg2);
  fs.rename(pathToInputFile, pathToOutputFile, function(err) {
    if (err) {
      console.error("Error: Can't rename file.");
    }
  });
}
export default rn;