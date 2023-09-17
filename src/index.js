function validAnagram(str1, str2) {
    /**Edge case to make sure both str are same length */
    if (str1.length !== str2.length) {
        return false;
    }
    const obj = {}; /**accumulator object */
    for (let char of str1) {
        /**Loops through the string and accumulated all the chars into an obj */
        if (obj[char]) {
            obj[char] = obj[char] + 1;
        }
        else {
            obj[char] = 1;
        }
    }
    for (let char of str2) {
        /**Next the second string is looped over and the accumulator obj
         * is checked to see if the string exists. That same comparison will also see
         * if char does exist but the value is 0. If the value is zero that means that
         * there are more of that char in the str2 than in str1 and it fails.
         * If everyting passes the 1 is subratacted from the value of that char in the obj.*/
        if (!obj[char]) {
            return false;
        }
        else {
            obj[char] = obj[char] - 1;
        }
    }
    return true;
}
console.log(validAnagram(' ', ' ')); /**true */
console.log(validAnagram('aaz', 'zza')); /**false */
console.log(validAnagram('anagram', 'nagaram')); /**true */
console.log(validAnagram('rat', 'car')); /**false */
