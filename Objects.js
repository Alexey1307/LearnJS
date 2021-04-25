//Объекты
//Если в объекте несколько свойств, то они перечисляются через запятую,
//Синтаксис "конструктор объекта" с оператором new
let newUser = new Object()
newUser.name = 'Hz'
newUser.age = '13'
// console.log(newUser)
console.log(newUser['age']) //доступ к свойству через квадратыне скобки и свойство - в кавычках!

let a = newUser.name
console.log(a)//доступ к свойству через переменную

//Литеральная нотация
let user = {
	name: 'Alex',
	need: 'Help',
	isProgramer: false,
	'like a birds': 'not yet', //если в имени несколько слов, то заключаем в кавычки
}
// console.log(user)
// console.log(user.name) //Обращение к свойствам объекта
// console.log(user.need) //через точку

//удаление свойства объекта, через delete
delete user.isProgramer;
// console.log(user)

//Для свойств, имена которых состоят из нескольких слов,
//доступ к значению «через точку» не работает.
//Для таких случаев существует альтернативный способ
//доступа к свойствам. через квадратные скобки.
user['like a birds'] = 'yes Iam'
// console.log(user)

//Проверка существования свойств с помощью оператора 'in'
//Синтаксис "key" in object
console.log('need' in user) //true
console.log('pokemon' in user) //false

//Цикл for in.
// Синтаксис: for (key in object){
	//тело цикла
//}

for (let key in user){
	// console.log(key) //ключи
	// console.log(user[key]) //значения
}

//Проверка - пустой ли объект
let user1 = {
	name: 'Alex',
	need: 'Help',
	isProgramer: false,
	'like a birds': 'not yet',
}

let newUser1 = new Object()

function isEmpty (obj) {
for(let key in obj){
	return true
	}
	return false
  }

console.log(isEmpty(user1))
console.log(isEmpty(newUser1))

//Найти сумму свойств объекта
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function counter (obj) {
	let sum = 0
	for(let key in obj){
		sum += obj[key]
	}
	return sum
}

console.log(counter(salaries))

//Умножение всех свойств объекта на 2
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};


function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2; //Не забывай равно *=, а не просто *.
    }
  }
}

multiplyNumeric(menu)
console.log(menu)
console