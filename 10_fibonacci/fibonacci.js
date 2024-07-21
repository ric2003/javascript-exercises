const fibonacci = function(num) {
    if(num==0){
        return 0;
    }else if(num<0){
        return "OOPS";
    }else if(num==1||num==2){
        return 1;
    }
    let lastNum = 1;
    let sum = 2;
    let temp = 0;
    for(let i=3;i<num;i++){
        temp = sum;
        sum += lastNum;
        lastNum = temp;

    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
