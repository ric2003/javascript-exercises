const sumAll = function(num1, num2) {
sum = 0;
for(let i = 0;i<arguments.length;i++){
    if (typeof arguments[i] != "number" || !(arguments[i] % 1 === 0) || arguments[i] < 0) {
        return "ERROR";
      }

}
if(num2<num1){
    let temp = num2;
    num2 = num1;
    num1 = temp;
}
for(let i=num1;i<=num2;i++){
    sum+=i;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
