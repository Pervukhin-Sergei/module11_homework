function someNum(num) {
    if (num < 1000) {
      for (let i = 2; i < num; i++) {
        if (num % i == 0) {
          return "Сложное число";
        }
      }
      return "Простое число";
    } else {
      return "Данные неверны";
    }
  }
  console.log(someNum(34));