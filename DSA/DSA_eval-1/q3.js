function runProgram(input) {
  // Write code here
  var input = input.trim().split("\n");
  let n = +input[0];
  let arr = input[1].trim().split(" ").map(Number);

  group(n, arr);
}

function group(n, arr) {
  let count = 1;
  for (let i = 0; i < n; i++) {
    if (arr[i] > arr[i + 1]) {
      count++;
    }
  }
  console.log(count);
}

if (process.env.USERNAME === "coder") {
  runProgram(`6
  1 2 4 3 5 8`);
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
