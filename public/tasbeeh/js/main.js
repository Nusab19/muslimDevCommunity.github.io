const tasbih = document.getElementById("tasbih");
const audio = new Audio(
  "https://github.com/muslimDevCommunity/tasbeeh/blob/main/asset/audio/Pocket.mp3?raw=true",
);

const GOALS = [50, 100, 500];

// Fix local storage reading by properly parsing the stored value
let clickCount = localStorage.getItem("clickcount")
  ? parseInt(localStorage.getItem("clickcount"))
  : 0;

// Update the display immediately with the correct initial value
tasbih.innerHTML = clickCount;

window.addEventListener("click", () => {
  updateNum();
  tasbih.innerHTML = clickCount;
  checkGoal();
});

// Fix typo in "touchstart" event name
window.addEventListener("touchstart", () => {
  updateNum();
  tasbih.innerHTML = clickCount;
  checkGoal();
});

window.addEventListener("keydown", (i) => {
  if (i.keyCode == 32 || i.keyCode == 13 || i.keyCode == 38) {
    updateNum();
    tasbih.innerHTML = clickCount;
    checkGoal();
  }
});

function updateNum() {
  // Fix the counter logic to properly increment
  clickCount += 1;
  localStorage.setItem("clickcount", clickCount);
}

function checkGoal() {
  if (GOALS.includes(clickCount)) {
    document.getElementById(`n${clickCount}`).classList.add("done");
    audio.play();
  }
}

function initGoal() {
  if (GOALS.includes(clickCount)) {
    document.getElementById(`n${clickCount}`).classList.add("done");
    audio.play();
  }
}

// Initialize goals based on the loaded counter value
initGoal();

function reset() {
  localStorage.removeItem("clickcount");
  clickCount = -1; // because touchstart and click event will increment the counter
  tasbih.innerHTML = clickCount;
}
