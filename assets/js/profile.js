function updateCountdown() {
    const eventDate = new Date('2024-12-25T18:00:00'); // Adjust date and time as needed
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
      document.getElementById('countdown-timer').innerText = 'Event has passed';
      return;
    }

    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById('countdown-timer').innerText = `${months} months ${days} days ${hours} hours remaining`;
  }

  // Ensure the countdown updates every second
  setInterval(updateCountdown, 1000);

  // Initial call to display countdown immediately
  updateCountdown();