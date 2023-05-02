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
  var audio = new Audio();
  audio.preload = "auto";
  audio.src =
    "https://cdn.discordapp.com/attachments/894902167314501633/1103005312652427264/2023-04-24_10-28-18.mp3";
  audio.play();
  var audio = new Audio();
  audio.preload = "auto";
  audio.src =
    "https://cdn.discordapp.com/attachments/894902167314501633/1103005130657378405/padenie-truby.mp3";
  audio.play();
}
button.addEventListener("click", v1);
