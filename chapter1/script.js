// console.log('hiii');

// let isUnique = (s) =>{
//     let hash={};

//     for (let i=0; i<s.length;i++){
//         let c=s[i];
//         if (hash[c]){
//             return false;
//         }else{
//             hash[c]=true;
//         }
//     }
//   return true;
// };

// console.log(isUnique('farnoush')==true);

// console.log(isUnique('llll'));

var checkPermute = function(stringOne, stringTwo) {
    // if different lengths, return false
    if (stringOne.length !== stringTwo.length) {
      return false;
    // else sort and compare 
    // (doesnt matter how it's sorted, as long as it's sorted the same way)
    } else {
      var sortedStringOne = stringOne.split('').sort().join('');
      var sortedStringTwo = stringTwo.split('').sort().join('');
      return sortedStringOne === sortedStringTwo;
    }
  };
  
  
  console.log(checkPermute('aba', 'aab'), true);
  
  console.log(checkPermute('aba', 'aaba'), false);
  
  console.log(checkPermute('aba', 'aa'), false);
  console.log(checkPermute('aba', 'aa'), false);