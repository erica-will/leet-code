/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let slow = 0;
  let fast = 1;
  let leng = nums.length - 1;

  for (let index = 0; fast <= leng; index++) {
    const current = nums[slow];
    const next = nums[fast];

    if (current === 0 && next !== 0) {
      nums[slow] = next;
      nums[fast] = current;
    } else if (current === 0 && next === 0) {
      fast++;
      continue;
    }
    slow++;
    fast++;
  }
}

// 優化點
// 不需要額外變數 leng：

// 直接使用 nums.length 會更簡潔。
// 不需要 fast = 1：

// fast 應該從 0 開始，而不是 1，讓快慢指針都從頭開始遍歷。
// 減少不必要的交換次數：

// 目前你的代碼會交換 每個 0 與非 0 的位置，但實際上 只需要移動非 0 元素到前面，最後再補 0。
// 最佳解法：兩遍掃描（Two-Pass Approach）

// 第一遍：將 非 0 元素 按順序放到前面
// 第二遍：將後面的數全部變成 0
function moveZeroes_refactor(nums: number[]): void {
  let slow = 0;

  // 第一遍：將非 0 元素搬到前面
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast];
      slow++; // 只有非 0 元素才會推進
    }
  }

  // 第二遍：將剩餘的數設為 0
  while (slow < nums.length) {
    nums[slow] = 0;
    slow++;
  }
}

//   單次遍歷的優勢
//   時間複雜度：O(n)（只遍歷一次）
//   空間複雜度：O(1)（不使用額外空間）
//   減少不必要的寫入操作（避免多次寫入相同數據）
function moveZeroes_refactor2(nums: number[]): void {
  let slow = 0; // 追蹤非 0 應該放置的位置

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      // 交換 fast 與 slow 位置
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++; // slow 只在交換後才移動
    }
  }
}
