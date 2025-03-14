function productExceptSelf(nums: number[]): number[] {
  const answers: Array<number> = [];
  let total = 1;
  let right = 0;
  let left = nums.length - 1;
  let zeroCount = 0;

  while (right < left) {
    if (zeroCount > 1) {
      total = 0;
      break;
    }
    const _numR = nums[right];
    const _numL = nums[left];
    if (_numR === 0 || _numL === 0) {
      if (_numR === 0) {
        zeroCount++;
      }
      if (_numL === 0) {
        zeroCount++;
      }
    }

    if (_numR !== 0 && _numL !== 0) {
      total = total * _numR * _numL;
    } else {
      if (_numR !== 0) {
        total = total * _numR;
      }
      if (_numL !== 0) {
        total = total * _numL;
      }
    }
    right++;
    left--;
  }

  if (right === left) {
    const _numR = nums[right];
    if (_numR === 0) {
      zeroCount++;
      if (zeroCount > 1) {
        total = 0;
      }
    } else {
      total = total * _numR;
    }
  }

  nums.forEach((num) => {
    if (zeroCount > 1) {
      answers.push(0);
    } else if (zeroCount === 1) {
      if (num === 0) {
        answers.push(total);
      } else {
        answers.push(0);
      }
    } else {
      answers.push(total / num);
    }
  });

  return answers;
}
