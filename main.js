// вариант 1
const button = document.getElementById("ok"); // тут мы задаём константу button значением butoon (или элементом, не помню что это)
let h2res = document.getElementById("res").innerHTML;
function v1() {
  // здесь создаём функцыю которая будет использоватся при нажатии кнопки

  let speed = document.getElementById("speed").value;
  let time = document.getElementById("time").value;
  let res = Number(speed) + Number(time);
  // console.log(speed);

  // alert(res);
  document.getElementById("res").innerHTML = h2res + res;
}
button.addEventListener("click", v1); // не знаю как это коментировать но если коротко то это штука которая при нажатии кнопки вызывает функцию
