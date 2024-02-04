import fs from 'fs';
import path from 'path';

async function rm(...file) {
  const fileName = file.join(' ').replace(/'|"/g, '');
  const pathToFile = path.join(process.cwd(), fileName);
  fs.rm(pathToFile, function(err) {
    if (err) {
      console.error("Error: Can't remove file.");
    }
  });
}

export default rm;