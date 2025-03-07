function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let mostCandies = 0;
  candies.forEach((c) => {
    if (c > mostCandies) mostCandies = c;
  });
  const output: boolean[] = [];
  candies.forEach((c) => {
    const res = c + extraCandies >= mostCandies;
    output.push(res);
  });

  return output;
}

function kidsWithCandiesRefactor_1(candies: number[], extraCandies: number): boolean[] {
    let mostCandies = 0;
    candies.forEach((c) => {
      if (c > mostCandies) mostCandies = c;
    });
    const output: boolean[] = [];
    candies.forEach((c) => {
      const res = c + extraCandies >= mostCandies;
      output.push(res);
    });
  
    return output;
  }
