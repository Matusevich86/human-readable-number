module.exports = function toReadable (number) {
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const firstDozen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const dozens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const hundreds = ['hundred'];

  let num = String(number).split('');

  if (num.length  === 1) {
    return units[num];
  } else if (num.length === 2) {
      if(num[0] === '1'){
          return firstDozen[num[1]];   
      }else if(num[0] > '1') {
        if (num[1] === '0') {
          return dozens[num[0]]
        }else{
          return dozens[num[0]] + ' ' + units[num[1]];
        }
      }
  } else if (num.length === 3) {
        if (num[1] === '0' && num[2] === '0') {
            return units[num[0]] + ' ' + hundreds[0];
        } else if (num[1] === '0') {
            return units[num[0]] + ' ' + hundreds[0] + ' ' + units[num[2]];
        } else if (num[1] === '1')  {
            return units[num[0]] + ' ' + hundreds[0] + ' ' +  firstDozen[num[2]];
        } else if (num[1] > '1' && num[2] === '0') {
            return units[num[0]] + ' ' + hundreds[0] + ' ' +  dozens[num[1]];
        } else if (num[1] > '1' && num[2] > '0') {
            return units[num[0]] + ' ' + hundreds[0] + ' ' +  dozens[num[1]] + ' ' + units[num[2]];
        }
  }
}
