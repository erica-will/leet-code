// 此為著名的「盛最多水的容器（Container With Most Water）」 問題
// 使用了 雙指針（two pointers） 的最佳策略，時間複雜度為 O(n)，空間複雜度為 O(1)
// 效率高： 每個元素只看一次。
// 空間效率好： 沒有額外記憶體使用。
// 邏輯清楚： 根據較短的高度決定要移動哪個指針。
function maxArea(height: number[]): number {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const lefth = height[left];
    const righth = height[right];
    const isLeft = lefth > righth;
    const lower = isLeft ? righth : lefth;
    const gap = right - left;
    const area = lower * gap;
    maxArea = area > maxArea ? area : maxArea;
    if (isLeft) {
      right--;
    } else {
      left++;
    }
  }

  return maxArea;
}

// 優化語意和簡潔程式碼
function maxArea_refactor(height: number[]): number {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const minHeight = Math.min(height[left], height[right]);
    const width = right - left;
    const area = minHeight * width;
    maxArea = Math.max(maxArea, area);

    // Move the pointer at the shorter line
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}
