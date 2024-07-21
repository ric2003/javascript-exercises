const punctuation = [' ', '!','.',',', '?'];
const palindromes = function (word) {
    word = word.toLowerCase();
    let j = word.length-1;
for(let i=0;i<word.length;i++){
    if(word[i]===word[j]){
        j--;

    }else if(punctuation.includes(word[j])){
        j--;
        i--;
    }else if(j==i){
        return true;
    }else if(punctuation.includes(word[i])){
        
    }else if(!(word[i]===word[j])){
        return false;
    }
}
return true;
};

// Do not edit below this line
module.exports = palindromes;
