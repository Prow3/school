// вариант 1
const button = document.getElementById("button"); // тут мы задаём константу button значением butoon (или элементом, не помню что это)
function v1() {
  // здесь создаём функцыю которая будет использоватся при нажатии кнопки

  let speed = document.getElementById("speed").Value;
  let time = document.getElementById("time").Value; // тут делаем тоже самое что и с button только с текстовыми полями
  let res = speed + time;

  alert(res);
}
button.addEventListener("click", task); // не знаю как это коментировать но если коротко то это штука которая при нажатии кнопки вызывает функцию

// вариант 2
function v2() {
  // здесь всё вроде должо быть понятно
  let speed, time, res;
  speed = task.speed.value;
  time = task.time.value;
  let time2 = Number(time);
  let speed2 = Number(time);
  res = time2 * speed2;
  alert(res);
}
