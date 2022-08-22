const firstDuplicate = arr => {
  const set = new Set();
  for (let num of arr) {
    if (set.has(num)) return num;
    set.add(num);
  }
  return -1;
};

console.log("firstDuplicate", firstDuplicate([2, 1, 5, 2, 3, 3, 4]));
console.log("firstDuplicate", firstDuplicate([1, 1, 2, 3, 3, 2, 2]));

const palindromic = str => {
  let a = 0;
  let z = str.length - 1;
  const fwd = [...str];
  const rev = [...str].reverse();
  const res = [];
  console.log(fwd);
  console.log(rev);
  while (fwd[a] === rev[z]) {
    const palingdrome = [];
    palingdrome.push(fwd[a]);
    z = z - 1;
  }
  a = a + 1;
};

console.log("palindromic", palindromic("abaxyxxyxf"));
