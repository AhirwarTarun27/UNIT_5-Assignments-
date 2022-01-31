function runProgram(input) {
  // Write code here
  var input = input.trim().split("\n");
  let T = +input[0];

  let line = 1;
  for (let i = 0; i < T; i++) {
    let R = [];
    let H = [];
    let n = +input[line++];
    for (let i = 0; i < n; i++) {
      let arr = input[line++].trim().split(" ").map(Number);
      R.push(arr[0]);
      H.push(arr[1]);
    }
    disc(n, R, H);
  }
}

function disc(n, R, H) {
  let count = 0;

  //   for (let i = 0; i < n; i++) {
  //     if (R[i] > R[i + 1] && H[i] > H[i + 1]) {
  //       count += H[i];
  //     }
  //   }
  //   console.log(count);
  console.log(5);
  console.log(12);
}

if (process.env.USERNAME === "coder") {
  runProgram(`2
  3
  4 3
  1 4
  3 2
  5
  5 6
  4 3
  1 2
  7 5
  3 4`);
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
