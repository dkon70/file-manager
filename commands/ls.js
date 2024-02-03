import fs from 'fs/promises';

class TableLine {
  constructor(name, type) {
    this.Name = name;
    this.Type = type;
  }
}

async function ls() {
  const files = [];
  const directories = [];
  const currentDir = await fs.readdir(process.cwd());
  for (let file of currentDir) {
    const stat = await fs.lstat(file);
    if (stat.isFile()) {
      files.push(new TableLine(file, 'file'));
    } else {
      directories.push(new TableLine(file, 'directory'));
    }
  }
  console.table([...directories, ...files]);
}

export default ls;