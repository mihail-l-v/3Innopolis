'use strict';

//задание №1
//Напишите таймер обратного отсчёта. При открытии страницы со скриптом необходимо спросить у пользователя число и запустить таймер обратного отсчёта,
//который, начиная с этого числа, каждую секунду будет уменьшать число на единицу и выводить в консоль сообщение “Осталось n”,
//где n это данное число. Как только число станет равно нулю, необходимо остановить таймер и вывести в консоль “Время вышло!”.
//Дополнительно, но не обязательно:
// - Необходимо учесть в коде, что пользователь может ввести не число (выводим ошибку в консоль, текст на ваше усмотрение)
// - Попробуйте решить задачу с помощью Promise

// решение без promise
function setTimer(time) {

  if (!Number(time)) {
    console.log(`Ошибка: введеное значение не число!`);
    return;
  }

  time++;
  let interval = setInterval(()=>{
    let value = console.log(`Осталось ${time -= 1}`);

    if (time === 0) {
      console.log(`Время вышло!`);
      clearInterval(interval)
    }

    return value;
  }, 1000);
}

const timer = prompt(`Введите начальное значение таймера:`, '');
setTimer(timer);


//решение через promise
let timer_2 = prompt(`Введите начальное значение таймера:`, "");

let askTimer = new Promise((resolve, reject) => {
  if (!Number(timer_2)) {
    reject();
    return;
  }

  timer_2++;
  let interval_2 = setInterval(() => {
    console.log(`Осталось ${(timer_2 -= 1)}`);

    if (timer_2 === 0) {
      clearInterval(interval_2);
      resolve();
    }
  }, 1000);
});

askTimer
  .then(() => {
    console.log(`Время вышло!`);
  })
  .catch(() => {
    console.log(`Ошибка: введеное значение не число!`);
  });


//Задание 2
// Выполните запрос на бэкенд по адресу https://reqres.in/api/users и выведите в консоль количество пользователей в ответе,
//а также имя, фамилию и email каждого пользователя в таком формате (соблюдение формата обязательно):
//Получили пользователей: 2
//— Yury Kundin (yury.kundin@yandex.ru)
//— Иван Наполеонов (test@mail.com)
//Дополнительно, но не обязательно:
// - Добавьте обработку ошибки на тот случай, если бэкенд недоступен (текст на ваше усмотрение).
//   Проверить можно, если вместо реального адреса указать несуществующий
// - Попробуйте написать код, который посчитает скольковремени выполнялся данный запрос и выведет это вконсоль (с точностью до миллисекунды)

const startAt = new Date();
let promise = fetch("https://reqres.in/api/users");

promise
  .then((response) => {
    return response.json();
  })

  .then((response) => {
    console.log(response);
    const endAt = new Date();
    const dateDiff = endAt.valueOf() - startAt.valueOf();
    console.log(`Время получения ответа от сервера: ${dateDiff} миллисекунд`);
    console.log(`Получили пользователей: ${response.data.length}`);
    for (let i = 0; i < response.data.length; i++) {
      console.log(
        ` - ${response.data[i].first_name} ${response.data[i].last_name} (${response.data[i].email})`
      );
    }
  })

  .catch(() => {
    console.log("Кажется бэкенд сломался :(");
  });
