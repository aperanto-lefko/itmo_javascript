document.getElementById('locBtn').addEventListener('click', () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      document.getElementById('output').textContent = 'Геолокация не поддерживается.';
    }
  });
  
  function showPosition(position) {
    const { latitude, longitude } = position.coords;
    document.getElementById('output').textContent =
      `Широта: ${latitude.toFixed(4)}, Долгота: ${longitude.toFixed(4)}`;
  
    const ctx = document.getElementById('mapCanvas').getContext('2d');
    ctx.fillStyle = '#6ab04c';
    ctx.fillRect(0, 0, 400, 300);
    ctx.fillStyle = 'red';
    const x = 200 + (longitude % 1) * 100;
    const y = 150 - (latitude % 1) * 100;
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fill();
  }