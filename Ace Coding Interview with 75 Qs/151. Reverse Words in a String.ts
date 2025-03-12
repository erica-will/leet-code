function reverseWords(s: string): string {
    return s.split(' ').filter(x=>!!x).reverse().join(' ');
};

// 減少不必要的陣列操作
// 減少記憶體使用，減少 split() 和 filter() 帶來的額外空間開銷
// 效能更高，適合大規模字串輸入的場景
function reverseWords_refactor(s: string): string {
    let words: string[] = [];
    let word = "";
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            word += s[i]; // 累積單字
        } else if (word) { 
            words.push(word); // 把累積的單字存入陣列
            word = ""; // 清空 word，準備下一個單字
        }
    }
    if (word) words.push(word); // 加入最後一個單字（如果有）

    return words.reverse().join(' '); // 反轉單字陣列並合併成字串
}

// 原地 (in-place) 修改字串：
// 使用字元陣列 (split('')) 來進行反轉操作，避免 split(' ') 產生的額外陣列開銷。
// 單次遍歷 (O(n)) 清理空格
// 透過 trim() + replace(/\s+/g, ' ') 來一次性移除多餘空格，避免 filter() 的額外時間與空間成本。
// 減少額外的陣列創建：
// 透過直接反轉原始字元陣列來避免 reverse() 與 join() 的多餘開銷。
// ✅ 省記憶體 (O(1))
// ✅ 更高效 (O(n))
// ✅ 適合大規模字串處理
// ✅ 無額外陣列，不使用 split(' ')，減少 filter() 過濾的額外開銷
// 這個版本的效能比 split() + filter() + reverse() + join() 的方法更好，因為我們：
// 不創建額外的陣列
// 不過濾陣列
// 只進行最少次數的遍歷
function reverseWords_refactor_two(s: string): string {
    // 移除前後多餘空格，並將多個空格壓縮成單個空格
    s = s.trim().replace(/\s+/g, ' ');

    // 轉換成字元陣列以進行原地操作
    let arr = s.split('');
    
    // 反轉整個字串
    reverse(arr, 0, arr.length - 1);

    let start = 0;
    for (let end = 0; end <= arr.length; end++) {
        if (end === arr.length || arr[end] === ' ') {
            reverse(arr, start, end - 1); // 反轉單字
            start = end + 1;
        }
    }

    return arr.join('');
}

// 反轉字元陣列內的某一部分
function reverse(arr: string[], left: number, right: number): void {
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]; // 交換兩個字元
        left++;
        right--;
    }
}

