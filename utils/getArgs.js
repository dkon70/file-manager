async function getArgs(...args) {
  const argsArr = args;
  if (argsArr.length > 2) {
    let res = [];
    const starts = [];
    const ends = [];
    argsArr.findIndex((elem, index) => {
      if (elem.startsWith('"') || elem.startsWith("'")) {
        starts.push(index);
      }
      if (elem.endsWith('"') || elem.endsWith("'")) {
        ends.push(index);
      }
    });
    
    if (starts.length === 2) {
      res = [argsArr.slice(starts[0], ends[0] + 1).join(' ').replace(/'|"/g, ''), argsArr.slice(starts[1], ends[1] + 1).join(' ').replace(/'|"/g, '')];
    } else {
      if (starts[0] === 0) {
        res = [argsArr.slice(starts[0], ends[0] + 1).join(' ').replace(/'|"/g, ''), argsArr.slice(-1).join(' ')];
      } else {
        res = [argsArr.slice(0, starts[0]).join(' '), argsArr.slice(starts[0], ends[0] + 1).join(' ').replace(/'|"/g, '')];
      }
    }
    return res;
  }
  return argsArr;
}

export default getArgs;