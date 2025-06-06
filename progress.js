// Progress Tracker

// 1. Identify current page
const pageMap = {
  "basics.html": "visited_basics",
  "board.html": "visited_board",
  "pieces.html": "visited_pieces",
  "moves.html": "visited_moves",
  "quiz.html": "visited_quiz",
  "games.html": "visited_games"
};

const currentPage = window.location.pathname.split("/").pop();
if (pageMap[currentPage]) {
  localStorage.setItem(pageMap[currentPage], "true");
}

// 2. If on index.html, calculate progress
if (currentPage === "" || currentPage === "index.html") {
  const keys = Object.values(pageMap);
  let score = keys.reduce((acc, key) => {
    return acc + (localStorage.getItem(key) === "true" ? 1 : 0);
  }, 0);

  let percent = Math.round((score / keys.length) * 100);
  const fill = document.getElementById("progressFill");
  const label = document.getElementById("progressPercent");

  if (fill && label) {
    fill.style.width = percent + "%";
    label.textContent = percent + "%";
  }
}
