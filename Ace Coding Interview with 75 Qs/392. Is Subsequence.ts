function isSubsequence(s: string, t: string): boolean {
  const slen = s.length - 1;
  const tlen = t.length;
  let sindex = 0;

  for (let index = 0; index < tlen; index++) {
    if (t[index] === s[sindex]) sindex++;
    if (sindex > slen) return true;
  }
  return sindex > slen;
}


// 原本函數已經是 O(n) 的最佳時間複雜度解法（其中 n 是 t 的長度），但可以進一步提升可讀性與邏輯清晰度：

// 優化點：
// 簡化條件判斷

// 你的 if (sindex > slen) return true; 可以放到 for 迴圈條件內，讓程式碼更簡潔。
// return sindex > slen; 這個條件可以改成 return sindex === s.length;，更語義化。
// 減少變數

// slen 變數其實可以省略，直接使用 s.length。
// 提升可讀性

// tlen 變數的意義不強，可以直接用 t.length。
// 優化後的程式碼：
function isSubsequence_refactor(s: string, t: string): boolean {
    let sindex = 0;
    
    for (let index = 0; index < t.length && sindex < s.length; index++) {
      if (t[index] === s[sindex]) {
        sindex++;
      }
    }
  
    return sindex === s.length;
  }
