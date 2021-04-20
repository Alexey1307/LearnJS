// Регулярные выражения.
// Регулярные выражения - мощные средства замены в строке.
// в JS реализованны отдельным объектом RegExp и интегрированны в методы строк.
// Состоят из шаблона и необязательных флагов.
// Существует 2 способа (синтаксиса) создания регулярного выражения.

//Длинный синтаксис:
// regexp = new RegExp('шаблон', 'флаги');

// //Короткий синтаксис (использует слеши '/'):
// regexp = /шаблон/; //без флагов
// regexp = /шаблон/gmi; //с флагами gmi.

// Слеши /..../ говорят JS, что это регулярное выражение. Они играют здесь
// ту же роль, что и кавычки для строк.

//Создание RegExp:
// let tag = prompt('What tag, do you want to find out?', 'h1');
// let regexp = new RegExp(`<${tag}>`);

//Метод строки 'Поиск' - str.match.
//Метод str.match(regexp) для строки str возвращает совпадение с регулярным выражением regexp.
let str = 'bla bla bla vvv';
console.log(str.match(/Bla/gi))

//Метод строки 'Поиск' - str.matchAll.
//Это новый, улучшенный вариант метода str.match.
//Отличия от match:
//1.Он возвращает не массив, а перебираемый объект с результатами. Обычный массив можно сделать с помощью Array.from.
//2.Каждое совпадение возвращается в виде массива со скобочными группами (как str.math без флага 'g').
//3.Если совпадений нет, то возвращается не null, а пустой перебираемый объект.

let str2 = '<h1>Hello, world!</h1>';
let regexp = /<(.*?)>/g;

let matchAll = str2.matchAll(regexp);
console.log(matchAll); // [object RegExp String Iterator], не массив, а перебираемый объект

matchAll = Array.from(matchAll);
console.log(matchAll); // теперь массив.

//Метод строки 'Замена' - str.replace.
//Заменяет совпадение с regexp в строке на replacement.
console.log('We will, we will'.replace(/we/i, 'I')); // без флага 'g' - заменяет только первое совпадение.
console.log('We will, we will'.replace(/we/ig, 'I')); // с флагом 'g' заменяте все совпадения.

//Метод строки 'Проверка' - regexp.test.
//проверяет, есть ли хоть одно совпадение, если да, то возвращает true, иначе false.

let strTest = "Я ЛюБлЮ поспать";
let regexp2 = /люблю/i;
console.log(regexp.test(strTest));

//Найти числа в массиве.
let task = ['a', 'v', 1, 2];
let result = task.toString().match(/\d/g);
console.log(result);