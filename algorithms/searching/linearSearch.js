const linearSearch = (arr, val) => {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }

  return -1;
};
