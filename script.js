console.log('hiii');

let isUnique = (s) =>{
    let hash={};

    for (let i=0; i<s.length;i++){
        let c=s[i];
        if (hash[c]){
            return false;
        }else{
            hash[c]=true;
        }
    }
  return true;
};

console.log(isUnique('farnoush')==true);

console.log(isUnique('llll'));