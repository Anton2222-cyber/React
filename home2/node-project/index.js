console.log('index.js start');
console.log(module);

const { sum, multiplication } = require('./Math2');

const { result } = require('./Calculator');
console.log('res calculator = ' + result);

console.log(sum(2, 3));
console.log(multiplication(2, 3));

console.log('index.js finish');

//require:
//1.resolving - поиск файла
//  1.1 core modules
//  1.2 файл по указанному пути
//    1.2.1 файл .js
//    1.2.2 файл .json
//  1.3 папка по указанному пути
//    1.3.1 package.json -> свойство "main"
//    1.3.2 index.js
//    1.3.3 index.json
//  1.4 node_modules
//  1.5 throw new Error()
//2.loading - чтение
//3.wrapping - оборачивает файл в функцию, добавляет туде стандартные объекты
//4.evaluatig - запуск функции из шага 3
//5.cashing - node запоминает результат функции,
//после этого происходит экспорт того, что лежит в module.exports
