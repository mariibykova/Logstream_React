//Конструкция if..else
function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
   a = 10;
  console.log(`a = ${a}`);
  let s = '';
  if (a > 10) {
    s += 'a is bigger than 10';
  } 
  else {
    s += 'a is less than or equal to 10 ';
    if (a === 5) {
      s += 'an example of a special case';
    }
  }
  if (a === 15) {
    s += 'but a is not 15';
  }
  if (a > 5) {
    s += 'and a is greater than 5';
  } 
  else {
    s += 'and a is less than or equal to 5 ';
  }
  if (a % 2) {
    s += ' and a is odd';
  } 
  else {
    s += ' and a is even';
  }
  return s;
}
console.log(manyChecks());


// Конструкция swich
function manyChecks() {
  let a = Math.floor(Math.random() * 20) + 1;
  a = 10;
  console.log(`a = ${a}`);
  let s = '';
  switch (true) {
    case (a > 10):
      s += 'a is bigger than 10';
      break;
    case (a <= 10):
      s += 'a is less than or equal to 10 ';
      if (a === 5) {
        s += 'an example of a special case';
      }
      break;
  }
  switch (true) {
    case (a === 15):
      s += 'but a is not 15';
      break;
  }
  switch (true) {
    case (a > 5):
      s += 'and a is greater than 5';
      break;
    default:
      s += 'and a is less than or equal to 5 ';
      break;
  }
  switch (true) {
    case (a % 2):
      s += ' and a is odd';
      break;
    default:
      s += ' and a is even';
      break;
  }
  return s;
}
console.log(manyChecks()); 








