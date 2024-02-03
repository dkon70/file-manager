import path from 'path';

async function up() {
  process.chdir(path.join(process.cwd(), '..'));
}

export default up;