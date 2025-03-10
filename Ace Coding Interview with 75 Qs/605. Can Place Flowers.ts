function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  const flowerbedLen = flowerbed.length;
  if (flowerbedLen <= 0) return false;
  if (n === 0) return true;
  if (flowerbedLen === 1) return flowerbed[0] === 0;
  let isOne = false;
  let zerosCount = 0;
  let availableSeats = 0;
  let isFirstZero = false;
  flowerbed.forEach((x, i) => {
    if (i === 0 && x === 0) isFirstZero = true;
    isOne = x === 1;
    if (isOne) {
      if (zerosCount > 0) {
        availableSeats += Math.floor(
          (zerosCount % 2 !== 0 || isFirstZero ? zerosCount : zerosCount - 1) /
            2
        );
      }
      isFirstZero = false;
      zerosCount = 0;
    } else {
      zerosCount += 1;
      if (i === flowerbedLen - 1) {
        if (zerosCount > 0)
          availableSeats += (isFirstZero ? zerosCount + 1 : zerosCount) / 2;
      }
    }
  });

  return availableSeats >= n;
}

function canPlaceFlowers_Refactor(flowerbed: number[], n: number): boolean {
    let count = 0;
    const flowerbedLen = flowerbed.length;
  
    for (let i = 0; i < flowerbedLen; i++) {
      if (flowerbed[i] === 0) {
        const prevEmpty = i === 0 || flowerbed[i - 1] === 0;
        const nextEmpty = i === flowerbedLen - 1 || flowerbed[i + 1] === 0;
  
        if (prevEmpty && nextEmpty) {
          flowerbed[i] = 1; // 種花
          count++;
          if (count >= n) return true; // 提前返回
        }
      }
    }
  
    return count >= n;
  }
  
