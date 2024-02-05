function quotesHandler(...filePath) {
  let fileName = filePath.join(' ');
  if (fileName.startsWith('"') || fileName.startsWith("'") && fileName.endsWith('"') || fileName.endsWith("'")) {
    fileName = fileName.replace(/^['"]|['"]$/g, '');
  }
  return fileName;
}

export default quotesHandler;