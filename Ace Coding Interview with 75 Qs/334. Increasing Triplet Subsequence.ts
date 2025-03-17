function increasingTriplet(nums: number[]): boolean {
  let c: number | undefined;
  let b: number | undefined;
  const numIndex = nums.length - 1;

  for (let index = 0; index <= numIndex; index++) {
    const num = nums[numIndex - index];
    if (c === undefined || num >= c) {
      c = num;
      continue;
    }
    if (b === undefined || num >= b) {
      b = num;
      continue;
    }
    return true;
  }

  return false;
}
