const ctx = document.getElementById('m_Chart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    datasets: [{
      label: '$',
      data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
      backgroundColor: "hsl(10, 79%, 65%)"
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});