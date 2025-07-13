document.getElementById('search-button').addEventListener('click', () => {
  const username = document.getElementById('username-input').value.trim();
  const noCardMessage = document.getElementById('no-card-message');
  const statsCards = document.getElementById('stats-cards');

  if (!username) {
    // Show message if no username entered
    noCardMessage.style.display = 'block';
    statsCards.style.display = 'none';
    resetStatsUI();
  } else {
    // Hide message and show stats card container
    noCardMessage.style.display = 'none';
    statsCards.style.display = 'flex';

    // Fetch user stats (mock example)
    fetchUserStats(username);
  }
});

function resetStatsUI() {
  document.getElementById('easy-count').textContent = '0/0';
  document.getElementById('medium-count').textContent = '0/0';
  document.getElementById('hard-count').textContent = '0/0';
}

// Mock function simulating fetching data from API
function fetchUserStats(username) {
  // Replace this with your real API call to get stats for the username

  // For demo: show some dummy data after 1 second
  setTimeout(() => {
    // Example dummy data
    const data = {
      easy: '60/320',
      medium: '218/711',
      hard: '39/732'
    };

    document.getElementById('easy-count').textContent = data.easy;
    document.getElementById('medium-count').textContent = data.medium;
    document.getElementById('hard-count').textContent = data.hard;
  }, 1000);
}
