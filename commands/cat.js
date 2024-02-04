import fs from 'fs';
import path from 'path';

async function cat(...filePath) {
  const fileName = filePath.join(' ').replace(/'|"/g, '');
  const pathToFile = path.resolve(fileName);
  const stream = fs.createReadStream(pathToFile, { encoding: 'utf-8' });
  stream.pipe(process.stdout);

  stream.on('error', function(err) {
    if (err.message.startsWith('ENOENT')) {
      console.error('Error: No such file.');
    } else if (err.message.startsWith('EPERM')) {
      console.error('Error: Permission denied.');
    } else {
      console.error('Error: Unexpected error');
    }
  });
  
  stream.on('end', function() {
    console.log();
  });
}

export default cat;