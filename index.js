function validAnagram(str1, str2){

    if(str1.length !== str2.length){
        return false
    }

    const accuObj1 = {}; /**fist accumulator object */
    const accuObj2 = {}; /**second accumulator object */

    for(let char of str1){
        if(accuObj1[char]){
            accuObj1[char] = accuObj1[char] + 1;
        } else{
            accuObj1[char] = 1;
        }
    }

    for(let char of str2){
        if(accuObj2[char]){
            accuObj2[char] = accuObj2[char] + 1;
        } else{
            accuObj2[char] = 1;
        }
    }

    for(key in accuObj1){
        if(!(accuObj2[key])){
            return false
        }
        if(accuObj1[key] !== accuObj2[key]){
            return false
        }
    }

    return true

}

console.log(validAnagram(' ', ' ')) /**true */
console.log(validAnagram('aaz', 'zza')) /**false */
console.log(validAnagram('anagram', 'nagaram')) /**true */
console.log(validAnagram('rat', 'car')) /**false */