function reverseVowels(s: string): string {
  const stringArray = s.split("");
  const stringIndex = stringArray.length;
  const indexToChange: Array<number> = [];

  for (let index = 0; index < stringIndex; index++) {
    const _word = stringArray[index];
    if (
      _word.toLowerCase() == "a" ||
      _word.toLowerCase() == "e" ||
      _word.toLowerCase() == "i" ||
      _word.toLowerCase() == "o" ||
      _word.toLowerCase() == "u"
    ) {
      indexToChange.push(index);
    }
  }

  const totalIndex = indexToChange.length;
  const stopIndex = Math.ceil(totalIndex / 2);

  for (let index = 0; index < stopIndex; index++) {
    const _prev = indexToChange[index];
    const _next = indexToChange[totalIndex - 1 - index];

    const _wordPrev = stringArray[_prev];
    const _wordNext = stringArray[_next];

    stringArray[_prev] = _wordNext;
    stringArray[_next] = _wordPrev;
  }

  return stringArray.join("");
}

//使用 Set 來判斷母音：目前你的程式碼每次都需要比對 5 次（if 條件），可以改用 Set 來加快判斷。
//雙指針法：目前的解法是先掃描字串找到所有母音索引，再反轉它們。可以直接使用雙指針法（Two Pointers），一邊從頭、一邊從尾掃描並交換母音，減少額外的空間使用。
function reverseVowels_refactor(s: string): string {
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
    const stringArray = s.split("");
    let left = 0;
    let right = stringArray.length - 1;
  
    while (left < right) {
      while (left < right && !vowels.has(stringArray[left])) {
        left++;
      }
      while (left < right && !vowels.has(stringArray[right])) {
        right--;
      }
      
      [stringArray[left], stringArray[right]] = [stringArray[right], stringArray[left]];
      
      left++;
      right--;
    }
  
    return stringArray.join("");
  }
  
