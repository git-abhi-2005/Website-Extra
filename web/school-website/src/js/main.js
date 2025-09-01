document.addEventListener('DOMContentLoaded', function() {
    // Navigation bar toggle for mobile view
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Form validation for contact and admissions forms
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            let isValid = true;
            const inputs = form.querySelectorAll('input, textarea');

            inputs.forEach(input => {
                if (!input.value) {
                    isValid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });

            if (!isValid) {
                event.preventDefault();
                alert('Please fill in all fields.');
            }
        });
    });

    // Dynamic content loading for announcements
    const announcementsSection = document.querySelector('.announcements');
    fetch('path/to/announcements.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(announcement => {
                const announcementDiv = document.createElement('div');
                announcementDiv.classList.add('announcement');
                announcementDiv.innerHTML = `<h3>${announcement.title}</h3><p>${announcement.content}</p>`;
                announcementsSection.appendChild(announcementDiv);
            });
        })
        .catch(error => console.error('Error loading announcements:', error));
});