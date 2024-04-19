function isHappyNumber(n: number): boolean {
    const seenNumbers = new Set<number>(); //Коллекция уникальных элементов (цифры)

    while (n !== 1 && !seenNumbers.has(n)) { //Пока число != 1 и не попалось то же самое число
        seenNumbers.add(n); //Добавление чила в коллекцию (для предотвращения бесконечного цикла)
        let sum = 0;
        while (n > 0) { //Пока число не кончится
            const digit = n % 10; //Получение последней цифры из числа
            sum += digit * digit; //Получение квадрата числа
            n = Math.floor(n / 10); //Избавление от вытащенной цифры (digit) в изначальном числе
        }
        n = sum; //Теперь новое число - сумма квадратов его составляющих
    }

    return n === 1; //Строго ли n = 1
}

const number = 86;
const isNumberHappy = isHappyNumber(number);
console.log(isNumberHappy);