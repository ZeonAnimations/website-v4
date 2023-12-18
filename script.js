document.addEventListener('DOMContentLoaded', function () {
    const githubProjectsContainer = document.getElementById('githubProjects');

    const username = 'ZeonAnimations';

    const apiUrl = `https://api.github.com/users/${username}/repos`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const projects = data.filter(repo => !repo.fork);

            githubProjectsContainer.innerHTML = projects.map(repo => `
                <div class="project">
                    <h3>${repo.name}</h3>
                    <p>${repo.description || 'No description available.'}</p>
                    <p>Language: ${repo.language || 'Not specified'}</p>
                    <a href="${repo.html_url}" target="_blank">View on GitHub</a>
                </div>
            `).join('');
        })
        .catch(error => {
            console.error('Error fetching GitHub data:', error);
            githubProjectsContainer.innerHTML = '<p>Error fetching projects from GitHub.</p>';
        });
});

$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        event.preventDefault();

        const target = this.hash;
        const $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
            window.location.hash = target;
        });

        if ($('.menu-items').hasClass('show')) {
            $('.menu-items').removeClass('show');
        }
    });

    $('#mobile-menu').on('click', function () {
        $('.menu-items').toggleClass('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Message sent successfully!');
        contactForm.reset();
    });
});

const currentYear = new Date().getFullYear();
document.getElementById('current-year').innerText = currentYear;