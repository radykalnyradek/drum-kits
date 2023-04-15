const kits = ["crash", "kick", "snare", "tom"];
const container = document.querySelector(".container");

kits.forEach((kit) => {
  const btn = document.createElement("button");
  container.appendChild(btn);
  btn.classList.add("btn");
  btn.innerText = kit;
  btn.style.backgroundImage = "url(img/" + kit + ".png" + ")";

  const audio = document.createElement("audio");
  audio.src = "sounds/" + kit + ".mp3";
  container.appendChild(audio);

  btn.addEventListener("click", () => {
    audio.play();
    btn.style.transform = "scale(.9)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 100);
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === kit[0]) {
      audio.play();
      btn.style.transform = "scale(.9)";
      setTimeout(() => {
        btn.style.transform = "scale(1)";
      }, 100);
    }
  });
});
