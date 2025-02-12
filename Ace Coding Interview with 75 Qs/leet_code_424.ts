// 424. Longest Repeating Character Replacement

// 也許從空隙下手 直接找出samples後 用K的長度去湊字串 然後比對頭尾 算出長度即可

function characterReplacement(s: string, k: number): number {
  const stringArray = returnStringArray(s);
  const samples = foundDistinct(stringArray);
  const a: Array<Array<string>> = [];
  const b: Array<number> = [];
  a.push(stringArray);

  for (let index = 0; index < k; index++) {
    const b: Array<Array<string>> = [];
    a.forEach((aval) => {
      aval.forEach((aa, aaval) => {
        samples.forEach((s) => {
          const returned: string[] = [...aval];
          returned[aaval] = s;
          if (a.findIndex((x) => x == returned) == -1) {
            b.push(returned);
          }
        });
      });
    });
    a.push(...b);
  }

  a.forEach((val) => foundConnectedString(val, b));
  const res: number = foundBiggest(b);
  return res;
}

function returnStringArray(s: string): Array<string> {
  const charArray = s.split('');
  return charArray;
}

function foundDistinct(s: string[]): string[] {
  const sample: string[] = [];
  s.forEach(function (char, index) {
    if (sample.findIndex((x) => x === char) == -1) {
      sample.push(char);
    }
  });
  return sample;
}

function foundConnectedString(val: Array<string>, b: Array<number>) {
  for (let index = 0; index < val.length; index++) {
    let count = 0;
    if (index == 0 || val[index - 1] != val[index]) {
      count++;
      for (let ii = index; ii < val.length - 1; ii++)
        if (val[ii] == val[ii + 1]) {
          count++;
        } else {
          break;
        }
    }
    if (b.findIndex((x) => x == count) == -1) {
      b.push(count);
    }
  }
}

function foundBiggest(b: Array<number>): number {
  let big = b[0];
  b.forEach((x) => {
    if (x > big) {
      big = x;
    }
  });
  return big;
}
