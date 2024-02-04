import fs from 'fs';
import path from 'path';

async function add(...file) {
  const fileName = file.join(' ').replace(/'|"/g, '');
  const pathToFile = path.join(process.cwd(), fileName);
  fs.open(pathToFile, 'wx', function(err, fd) {
    if (err) {
      err.code.startsWith('EPERM') ? console.log("Error: Permission denied.") : console.error("Error: Can't create file.");
    }
    fs.close(fd);
  });
}

export default add;