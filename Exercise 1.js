
let n = 5;
let text = "";
for (let i = 1; i <= n; i++) {

  for (let j = 0; j < n - i; j++) {
    text = text + " ";
  }
  
  for (let k = 0; k < i; k++) {
    text = text + "+";
  }
  text = text + "\n";
}
console.log(text);
