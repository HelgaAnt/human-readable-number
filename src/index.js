module.exports = function toReadable (number) {

  let arr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

  let arr2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let str = number.toString();
  
  let res = '';
  if (number >= 0 && number <= 20)  res = arr[number];
  if (number >= 21 && number < 100) res = arr2[str[0]] + ' ' + arr[str[1]];
  if (number >= 100) {
    res = arr[str[0]] + ' hundred ';
    let n = number % 100;

    if (n >= 0 && n <= 20)  res = res + arr[n];
    if (n >= 21 && n < 100) res = res + arr2[str[1]] + ' ' + arr[str[2]];
  };

  return (res=='')? 'zero' : res.trim();
  
}
