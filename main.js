const button = document.getElementById("ok");
function v1() {
  let cop = Number(document.getElementById("speed").value);
  if (cop < 0) {
    document.getElementById("res").innerHTML =
      "копiйок не може бути меньш нiж нуль";
    throw Error;
  }
  let grn = Math.trunc(cop / "100");
  cop = cop % 100;
  let res = grn + " гривень та " + cop + " копiйок";
  document.getElementById("res").innerHTML = res;
}
button.addEventListener("click", v1);

function soundClick() {
  let audio = new Audio();
  audio.src = "/padenie-truby.mp3";
  audio.autoplay = true;
}
