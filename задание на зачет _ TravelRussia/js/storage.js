const form = document.getElementById('feedbackForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = {
    email: form.email.value,
    tripDate: form.tripDate.value,
    moodColor: form.moodColor.value,
    rating: form.rating.value,
    region: form.region.value
  };
  localStorage.setItem('feedback', JSON.stringify(data));
  alert('Отзыв сохранён в localStorage!');
});