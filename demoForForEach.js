const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

array1.forEach((element,index) => console.log(element+index));

// expected output: "a0"
// expected output: "b1"
// expected output: "c2"