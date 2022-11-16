function factorial(n){
    let factorial = 1;
    for(let i = 1; i <= n; i++){
        factorial = factorial * i;
    }
    return factorial;
}
console.log(factorial);

function gcd(a, b) {
  while ((a % b) > 0)  {
   let r = a % b;
   a = b;
   b = r;
   }
  return b;
}
console.log(gcd);


function lcm(c, d) {
    let gcd1 = gcd(c, d);
    
    lcm = (c*d)/gcd1;
  
  return lcm
}
console.log(lcm);


function toHexadecimal(num){
    let arr = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let hex = "";
    let r = "";
    while( num > 0 )  {  
       r = num%16;   
       hex = hex + arr[r];   
       num = Math.floor(num/16);  
     }  
    return hex;    
 }
console.log(toHexadecimal);

module.exports = {
  factorial,
  gcd,
  lcm,
  toHexadecimal
}
