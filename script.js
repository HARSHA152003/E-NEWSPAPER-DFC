function displayDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options);
    document.getElementById('liveDate').textContent = today;
  }

  // Call the function when the page loads
  displayDate();