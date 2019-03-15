const isPalindrome = n => {
  let num1 = String(n);
  let num2 = num1.split("").reverse().join("");
  if (num1 === num2) {
    return true;
  } else {
    return false;
  }
}
