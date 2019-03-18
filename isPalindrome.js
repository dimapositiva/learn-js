const isPalindrome = n => {
  let num1 = String(n);
  let num2 = num1.split("").reverse().join("");
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
}

//alternative solution
const isPalindrome2 = n => {
  let y = n;
  let z = 0;
  let x = 0;
  while (y > 0) {
    x = y % 10;
    z = z * 10 + x;
    y = Math.floor(y / 10);
  }
  if (n === z) {
    return true;
  } else {
    return false;
  }
}
