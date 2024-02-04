import { createHash } from 'crypto';
import path from 'path';
import fs from 'fs';

async function hash(...pathArg) {
  const pathToFile = path.resolve(pathArg.join(''));
  const hash = createHash('sha256');
  const stream = fs.createReadStream(pathToFile);
  stream.on('data', function(data) {
      hash.update(data);
      console.log(hash.digest('hex'));
  });

  stream.on('error', function(err) {
    if (err.message.startsWith('ENOENT')) {
      console.error('Error: No such file.');
    } else if (err.message.startsWith('EPERM')) {
      console.error('Error: Permission denied.');
    } else {
      console.error(`Error: Can't calculate hash.`);
    }
  });
}

export default hash;