// вариант 1
const button = document.getElementById("ok"); // тут мы задаём константу button значением butoon (или элементом, не помню что это)
let h2res = document.getElementById("res").innerHTML;
function v1() {
  // здесь создаём функцыю которая будет использоватся при нажатии кнопки

  let speed = document.getElementById("speed").value;
  let time = document.getElementById("time").value;
  let res = speed * time;
  speed = Number(speed);
  time = Number(time);
  if (speed < 0) {
    document.getElementById("res").innerHTML = "Швидкість має бути більш ніж 0";
    throw Error;
  }
  if (time < 0) {
    document.getElementById("res").innerHTML = "час має бути більш ніж 0";
    throw Error;
  }

  // console.log(speed);

  // alert(res);
  document.getElementById("res").innerHTML = h2res + res;
}
button.addEventListener("click", v1); // не знаю как это коментировать но если коротко то это штука которая при нажатии кнопки вызывает функцию
