function compress(chars: string[]): number {
  let consecutiveCounts = 0;
  let beforeChar: string | undefined = undefined;

  for (let i = chars.length - 1; i >= 0; i--) {
    const value = chars[i];
    if (value === beforeChar) {
      consecutiveCounts++;
      chars.splice(i, 1);
      if (i === 0) {
        const _push = String(consecutiveCounts).split("");
        if (_push) chars.splice(i + 1, 0, ..._push);
      }
    } else {
      if (consecutiveCounts > 1) {
        const _push = String(consecutiveCounts).split("");
        if (_push) chars.splice(i + 2, 0, ..._push);
      }
      beforeChar = value;
      consecutiveCounts = 1;
    }
  }

  return chars.length;
}

// ✅ 使用雙指針，時間複雜度 O(n)
// ✅ 直接修改陣列，不使用 splice()，提高效能
// ✅ 減少變數與重複操作，提升可讀性
// read 指針 遍歷 chars 陣列，並計算當前字母的出現次數。
// write 指針 負責將壓縮後的字元和數字直接覆寫到 chars 陣列。
// 如果字母出現超過 1 次，將數字拆開寫入（例如 12 需要寫入 "1","2"）。
// 返回 write 指針的值，表示壓縮後的長度。
function compress_refactor(chars: string[]): number {
    let write = 0; // 寫入指針
    let read = 0;  // 讀取指針
  
    while (read < chars.length) {
      let char = chars[read]; // 當前字母
      let count = 0;
  
      // 計算當前字母的連續出現次數
      while (read < chars.length && chars[read] === char) {
        read++;
        count++;
      }
  
      // 寫入字母
      chars[write] = char;
      write++;
  
      // 如果出現次數 > 1，寫入數字
      if (count > 1) {
        let countStr = count.toString(); // 將數字轉為字串
        for (let c of countStr) {
          chars[write] = c;
          write++;
        }
      }
    }
  
    return write; // 回傳壓縮後的長度
  }
  
