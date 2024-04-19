type Push<T extends unknown[], E> = [...T, E]; //Тип: обобщённый массив + конкретный тип, преобразовать в массив

//Пример №1
type Result1 = Push<[123, 456], "Numbers">; //Объявление такого типа
const Mas1: Result1 = [123, 456, "Numbers"]; //Переменная объявленного типа
console.log(Mas1); //Вывод переменной

//Пример №2
type Result2 = Push<["Sun", null, "RandomText"], 3>;
const Mas2: Result2 = ["Sun", null, "RandomText", 3]; 
console.log(Mas2); 

//Для компиляции TypeScript - tsc
//Для запуска JavaScrypt = node <ИМЯ_ФАЙЛА>.js