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
}

export default hash;