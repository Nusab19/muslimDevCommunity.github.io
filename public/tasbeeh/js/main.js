const tasbeeh = document.getElementById("tasbeeh");
const audio = new Audio(
  "https://github.com/muslimDevCommunity/tasbeeh/blob/main/asset/audio/Pocket.mp3?raw=true",
);

const GOALS = [33, 50, 100, 500];

// Fix local storage reading by properly parsing the stored value
let clickCount = localStorage.getItem("clickcount")
  ? parseInt(localStorage.getItem("clickcount"))
  : 0;

// Update the display immediately with the correct initial value
tasbeeh.innerHTML = clickCount;

window.addEventListener("click", () => {
  updateNum();
  tasbeeh.innerHTML = clickCount;
  checkGoal();
});


window.addEventListener("keydown", (e) => {
  // Replace deprecated keyCode with key property
  if (e.key === " " || e.key === "Space" || e.key === "Enter" || e.key === "ArrowUp") {
    updateNum();
    tasbeeh.innerHTML = clickCount;
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
  tasbeeh.innerHTML = clickCount;
  location.reload();
}