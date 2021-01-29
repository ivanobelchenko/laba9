//Задание 1
console.log('Задание 1')
let student = {
    firstname: 'Иван',
    lastname: 'Обельченко',
    group: '201-321',
}
console.log('Список свойств: ' + Object.keys(student).toString());
console.log('Студент ' + student.firstname + ' '+ student.lastname+ ' учится в '+ student.group+ ' группе' );
//Задание 2
console.log("Задание 2")
let array = [1, 2, 3, 4, 5]; 
console.log(`[${array.join(', ')}]`)
function arrayCut(array) {
   for(let i = array.length; i > 0; i--) {
       if(i != 1) { 
           console.log(`${array.pop()} осталось [${array.join(', ')}]`);
        }
   }
   console.log(`${array[0]}`) 
}
arrayCut(array)
//Задание 3
console.log("Задание 3")
function isPalindrome(word) {
        reverse = word.split('').reverse().join('');
    if (reverse == word) {
      console.log('true');
    } else {
        console.log('false');
    }
  };
let word = 'довод'
console.log(word)
isPalindrome(word);
word = 'кружка'
console.log(word)
isPalindrome(word);
//Задание 4
console.log("Задание 4")
function scalarMultiplication(number, matrix) {
    let stroka = ''
    matrix.forEach(value => {
        value.forEach(i => {
            stroka += i * number + ' '
        })
        stroka += '\n'
    }) 
    console.log(stroka)
}
scalarMultiplication(3, [[1,2,3],[4,5,6],[7,8,9]])