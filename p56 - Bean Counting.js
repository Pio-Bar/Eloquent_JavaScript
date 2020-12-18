//Exercise page 56 -- BEAN COUNTING

//My Solution


function countChar(str,letter){
    let counter = 0
    for(let i = 0; i < str.length; i++){
        if (str[i] === letter){
           counter ++;
        }
    }return counter
}

function countBs(str){
    return countChar(str,'B')
}


console.log(countChar('mamama','m'))
console.log(countBs("BABY"))

// Book's Solution


// function countChar(string, ch) {
//     var counted = 0;
//     for (var i = 0; i < string.length; i++)
//       if (string.charAt(i) == ch)
//         counted += 1;
//     return counted;
//   }
  
//   function countBs(string) {
//     return countChar(string, "B");
//   }
  
//   console.log(countBs("BBC"));
//   // → 2
//   console.log(countChar("kakkerlak", "k"));
//   // → 4