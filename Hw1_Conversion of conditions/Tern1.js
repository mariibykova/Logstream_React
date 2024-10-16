//Конструкция с if...else
let a = Math.floor(Math.random() * 100);
if (a > 10) {
    if ((a) > 5) {
        a = (2 * a) + 1;
    } 
    else {
        if (a < 3) {
            a = 1;
        } 
        else {
            if (2 * (a - 2) > 4) {
                a = 5;
            } 
            else {
                a = (a % 2 === 0) ? 6 : 7;
            }
        }
    }
} 
else {
    if ((a * 2) > 5) {
        a = (2 * a) + 1;
    } 
    else {
        if (a < 3) {
            a = 1;
        } 
        else {
            if (2 * (a - 2) > 4) {
                a = 5;
            } 
            else {
                a = (a % 2 === 0) ? 6 : 7;
            }
        }
    }
}
console.log(a);

//Конструкция switch()
let a = Math.floor(Math.random() * 100);
switch (true) {
    case (a > 10 && (a > 5)):
        a = (2 * a) + 1;
        break;
    case (a <= 10 && (a * 2 > 5)):
        a = (2 * a) + 1;
        break;
    case (a < 3):
        a = 1;
        break;
    case (2 * (a - 2) > 4):
        a = 5;
        break;
    default:
        a = (a % 2 === 0) ? 6 : 7;
}
console.log(a);
