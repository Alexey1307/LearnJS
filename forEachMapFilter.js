// Масссив переберающие методы.


//foreach
// Метод «arr.forEach(callback[, thisArg])» используется для перебора массива.
// Он для каждого элемента массива вызывает функцию callback.
// Этой функции он передаёт три параметра callback(item, i, arr):
// item – очередной элемент массива.
// i – его номер.
// arr – массив, который перебирается.

var arr = ['HTML', 'CSS', 'JS'];
 arr.forEach(function(item, i, arr){
 	console.log(i + ": " + item);
	console.log(item.length);
 });
 

//map
// Метод «arr.map(callback[, thisArg])» используется для трансформации массива.
// Он создаёт новый массив, который будет состоять из результатов
// вызова callback(item, i, arr) для каждого элемента arr.

var names = ['HTML', 'CSS', 'JS'];

var nameLengths = names.map(function(name){
	return name.length;
})

//Получаем массив с длинами
console.log('map: ' + nameLengths);

//filter
//используется для фильтрации массива через функцию.
//Он создает новый массив, в который войдут только те элементы,
//для которых вызов callback(item, i, arr) вернет true.

var arr2 = [1, -1, 2, -2, 3];
var positiveArr = arr2.filter(function (number) {
	return number > 0;
})
console.log('Filter: ' + positiveArr);