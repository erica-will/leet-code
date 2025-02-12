// 1071. Greatest Common Divisor of Strings

function gcdOfStrings(str1: string, str2: string): string {
  const st1L = str1.length;
  const st2L = str2.length;

  let a = st1L;
  let b = st2L;
  let gcdNum = 0;
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  gcdNum = a;

  let keyNum = 1;
  if (gcdNum % 7 === 0) {
    keyNum = 7;
  } else if (gcdNum % 5 === 0) {
    keyNum = 5;
  } else if (gcdNum % 3 === 0) {
    keyNum = 3;
  } else if (gcdNum % 2 === 0) {
    keyNum = 2;
  }

  let answer = str1.slice(0, gcdNum);

  let fakeSt1 = answer;
  let fakeSt2 = answer;
  const count1 = st1L / gcdNum;
  const count2 = st2L / gcdNum;

  for (let index = 1; index < count1; index++) {
    fakeSt1 = fakeSt1 + answer;
  }
  for (let index = 1; index < count2; index++) {
    fakeSt2 = fakeSt2 + answer;
  }

  return fakeSt1 === str1 && fakeSt2 === str2 ? answer : "";
}
