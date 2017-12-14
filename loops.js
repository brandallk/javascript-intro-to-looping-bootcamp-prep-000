function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array[i] = `I am ${i} strange loop.`;
    if (i !== 1) {
      array[i].concat('s');
    }
  }
  
  return array;
}