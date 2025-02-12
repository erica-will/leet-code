// 1768. Merge Strings Alternately

//1st try 00:00:05:19
function mergeAlternately(word1: string, word2: string): string {
  let sum = "";
  for (
    let index = 0;
    index < word1.length || index < word2.length;
    index++
  ) {
    if (word1[index]) {
      sum = sum + word1[index];
    }
    if (word2[index]) {
      sum = sum + word2[index];
    }
  }
  return sum;
}

