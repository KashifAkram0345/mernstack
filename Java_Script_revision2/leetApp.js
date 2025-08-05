
const searchButton = document.getElementById("search_button");
const userInput = document.getElementById("user_input");
const circles = document.querySelectorAll(".circle");


const  data = {
  easy: 120,
  medium: 75,
  hard: 30,
};

function updateCircles(stats) {
  const [easy, medium, hard] = [stats.easy, stats.medium, stats.hard];
  circles[0].textContent = `Easy\n${easy}`;
  circles[1].textContent = `Medium\n${medium}`;
  circles[2].textContent = `Hard\n${hard}`;
}


searchButton.addEventListener("click", () => {
  const username = userInput.value.trim();

  if (username === "") {
    alert("Please enter a username.");
    return;
  }


  console.log(`Fetching stats for: ${username}`);
  
  
  setTimeout(() => {
    updateCircles(data);  // Replace with real data later
  }, 500);
});
