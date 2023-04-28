const button = document.getElementById("ok");
const h2res = document.getElementById("res").innerHTML;
function v1() {
  let speed = document.getElementById("speed").value;
  let time = document.getElementById("time").value;
  let res = speed * time;
  speed = Number(speed);
  time = Number(time);
  if (speed <= 0) {
    document.getElementById("res").innerHTML = "Швидкість має бути більш ніж 0";
    throw Error("Швидкість має бути більш ніж 0");
  }
  if (time <= 0) {
    document.getElementById("res").innerHTML = "час має бути більш ніж 0";
    throw Error("час має бути більш ніж 0");
  }

  document.getElementById("res").innerHTML = h2res + res;
}
button.addEventListener("click", v1);
