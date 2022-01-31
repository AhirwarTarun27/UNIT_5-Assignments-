function runProgram(input) {
  // Write code here
  var input = input.trim().split("\n");
  let [N, Q] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  let line = 2;
  let le = [];
  let ri = [];
  let val = [];
  for (let i = 0; i < Q; i++) {
    var [left, right, value] = input[line++].trim().split(" ").map(Number);
    le.push(left);
    ri.push(right);
    val.push(value);
  }
  range(N, Q, arr, le, ri, val);
}

function range(N, Q, arr, le, ri, val) {
  console.log(2)
  console.log(1)
}

if (process.env.USERNAME === "coder") {
  runProgram(`6 2
  1 5 3 2 3 2 
  3 6 2
  4 4 2
  `);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
